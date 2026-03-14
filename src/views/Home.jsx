import { useState } from "react";
import TaskCard from "../components/TaskCard";

function Home() {

  const [tasks] = useState([
    { id: 1, title: "Estudiar React", subject: "Programación Web" },
    { id: 2, title: "Hacer ejercicio de Java", subject: "POO" },
    { id: 3, title: "Leer documentación", subject: "Spring Boot" },
    { id: 4, title: "Preparar examen", subject: "Base de Datos" },
    { id: 5, title: "Revisar apuntes", subject: "Algoritmos" }
  ]);

  return (
    <div>
      <h1>Mis tareas</h1>

      {tasks.map((task) => (
        <TaskCard 
          key={task.id}
          title={task.title}
          subject={task.subject}
        />
      ))}

    </div>
  );
}

export default Home;