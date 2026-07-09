"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  name: string;
  email: string;
};

export type OrderInfo = {
  orderId: string;
  date: string;
  total: number;
  items: number;
  status: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  orders: OrderInfo[];
  addOrder: (order: OrderInfo) => void;
  isMounted: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<OrderInfo[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse user from local storage", e);
      }
    }

    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
        try {
            setOrders(JSON.parse(storedOrders));
        } catch (e) {
            console.error("Failed to parse orders from local storage", e);
        }
    }
  }, []);

  const login = (email: string, name: string) => {
    const newUser = { email, name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const addOrder = (order: OrderInfo) => {
    setOrders((prev) => {
        const newOrders = [order, ...prev];
        localStorage.setItem("orders", JSON.stringify(newOrders));
        return newOrders;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        orders,
        addOrder,
        isMounted,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
