function addStudent() {
    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let branch = document.getElementById("branch").value;

    document.getElementById("result").innerText =
        "Student Added:\nName: " + name +
        "\nRoll Number: " + rollno +
        "\nBranch: " + branch;
}