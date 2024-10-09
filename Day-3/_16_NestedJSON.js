function manageCompany(jsonObject, operation, departmentName, employee) {
    const department = jsonObject.company.departments.find(
        (dept) => dept.name === departmentName
    );

    if (!department) {
        console.log(`Department ${departmentName} not found.`);
        return;
    }

    switch (operation) {
        case "add":
            department.employees.push(employee);
            console.log(
                `Employee ${employee.name} added to ${departmentName} department.`
            );
            break;
        case "remove":
            department.employees = department.employees.filter(
                (emp) => emp.id !== employee.id
            );
            console.log(
                `Employee with ID ${employee.id} removed from ${departmentName} department.`
            );
            break;
        case "update":
            const empIdx = department.employees.findIndex(
                (emp) => emp.id === employee.id
            );
            if (empIdx !== -1) {
                department.employees[empIdx] = {
                    ...department.employees[empIdx],
                    ...employee,
                };
                console.log(
                    `Employee with ID ${employee.id} updated in ${departmentName} department.`
                );
            } else {
                console.log(
                    `Employee with ID ${employee.id} not found in ${departmentName} department.`
                );
            }
            break;
        case "find":
            return department.employees;
        default:
            console.log(`Invalid operation: ${operation}`);
    }
}

const jsonObject = {
    company: {
        departments: [
            {
                name: "Engineering",
                employees: [
                    { id: 1, name: "Alice", role: "Engineer" },
                    { id: 2, name: "Bob", role: "Senior Engineer" },
                ],
            },
            {
                name: "HR",
                employees: [{ id: 3, name: "Carol", role: "HR Manager" }],
            },
        ],
    },
};

manageCompany(jsonObject, "add", "Engineering", { "id": 4, "name": "Dave", "role": "Intern" });
manageCompany(jsonObject, "remove", "HR", { "id": 3 });
manageCompany(jsonObject, "update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });
const employees = manageCompany(jsonObject, "find", "Engineering");
console.log(employees);