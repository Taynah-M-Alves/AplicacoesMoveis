type ApiResponse<T> = {
    sucesso: boolean,
    dados: T | null,
    erro: string | null,
};

interface Usuario {
    id: number, 
    nome: string, 
    email: string,
}

const usuarios: Usuario[] = [
    { id: 1, nome: "mario", email: "mario@email.com" },
    { id: 2, nome: "felipe", email: "felipe@email.com" },
    { id: 3, nome: "angela", email: "angela@email.com" }
  ];

function buscarUsuarios(): ApiResponse<Usuario[]> {
    
  return ({
    sucesso: true, 
    dados: usuarios,
    erro: null
  })
}
