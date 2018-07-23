const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
    console.log("Creando Empleado");
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    console.log("Empleado creado", req.body);
    res.json({status: "Empleado creado"});
}

employeeCtrl.getEmployee = async (req, res) => {
    console.log("Id solicitado: ", req.params.id);
    const emp = await Employee.findById(req.params.id);
    res.json(emp);
}

employeeCtrl.editEmployee = async (req, res) => {
    
    const { id } = req.params;
    const emp = {
        name: req.body.name,
        position: req.body.position,
        salary: req.body.salary,
        office: req.body.office
    }
    console.log("Id a editar: ", id);
    await Employee.findByIdAndUpdate(id, {$set: emp}, {new: true});
    res.json({status: "Empleado actualizado"});
}
employeeCtrl.deleteEmployee = async (req, res)  => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: "Empleado eliminado"});
}

module.exports = employeeCtrl;