function TaskCard({ title, subject }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{subject}</p>
    </div>
  );
}

export default TaskCard;