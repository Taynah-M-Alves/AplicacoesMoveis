import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

interface ListaTarefasProps {
  tarefas: Tarefa[];
  onToggle: (id: number) => void;
}

export default function ListaTarefas({
  tarefas,
  onToggle
}: ListaTarefasProps) {

  const [filtro, setFiltro] =
    useState<"todas" | "pendentes" | "concluidas">("todas");

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setFiltro("todas")}>
          <Text>Todas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFiltro("pendentes")}>
          <Text>Pendentes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFiltro("concluidas")}>
          <Text>Concluídas</Text>
        </TouchableOpacity>
      </View>


      {tarefasFiltradas.map((tarefa) => (
        <TouchableOpacity
          key={tarefa.id}
          onPress={() => onToggle(tarefa.id)}
        >
          <Text>
            {tarefa.titulo} {tarefa.concluida ? "concluida" : "pendente"}
          </Text>
        </TouchableOpacity>
      ))}

    </View>
  );
}