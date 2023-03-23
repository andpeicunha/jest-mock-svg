import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Image from "next/image";

import Navbar from "./Navbar";
import styles from "./Lista.module.css";
import addBt from "./images/add.png";
import carrinho from "./images/carrinho.svg";

function cartReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_TO_CART":
      // Verifica se o item já está no carrinho
      const existingCartItem = state.cartItems.find((item: any) => item.id === action.payload.id);
      if (existingCartItem) {
        // Se já estiver, atualiza a quantidade do item no carrinho
        return {
          ...state,
          cartItems: state.cartItems.map((item: any) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // Se não estiver, adiciona o novo item ao carrinho
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    default:
      return state;
  }
}

function getStoredCartItems() {
  if (typeof window !== "undefined") {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems !== null) {
      try {
        const cartItems = JSON.parse(storedCartItems);
        return cartItems;
      } catch (error) {
        console.error(error);
      }
    }
  }
  return [];
}

export default function Lista() {
  const [dados, setDados] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, { cartItems: getStoredCartItems() });

  const CartLength = state.cartItems.length;

  useEffect(() => {
    if (state.cartItens !== null) {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  }, [state.cartItems]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/list");
        setDados(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function handleAddToCart(itemId: any, itemName: any, itemValue: any) {
    dispatch({ type: "ADD_TO_CART", payload: { id: itemId, name: itemName } });
  }

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        {CartLength !== 0 ? <div className={styles.qtdeCart}>{CartLength}</div> : ""}
        <div className={styles.carrinho}>
          <Image src={carrinho} width="24" height="24" alt="Adicionar" />
        </div>
        <div className={styles.title}>Lista de Produtos</div>

        {dados.map((prod: any) => (
          <div key={prod.id} className={styles.listContainer}>
            <ul>
              <li>{prod.id}</li>
              <li>{prod.name}</li>
              <li>{prod.valor}</li>
              <button onClick={() => handleAddToCart(prod.id, prod.name, prod.valor)} className={styles.listButton}>
                <Image src={addBt} width="24" height="24" alt="Adicionar" />
              </button>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
