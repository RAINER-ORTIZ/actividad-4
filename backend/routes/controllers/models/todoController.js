const Todo = require('../models/Todo');

// Obtener todas las tareas
exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Crear una nueva tarea
exports.createTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        deadline: req.body.deadline,
    });

    try {
        const newTodo = await todo.save();
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar una tarea
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
