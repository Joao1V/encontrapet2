"use client"

// Simulação de autenticação (fake)
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem("isAuthenticated") === "true"
}

export function login() {
  if (typeof window !== "undefined") {
    localStorage.setItem("isAuthenticated", "true")
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAuthenticated")
  }
}
