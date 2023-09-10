let array1 = [45,129,"cat",2,"dog","hamster",125.57];

alert(Array.isArray(array1));

alert(array1[0]);
alert(array1[array1.length-1]);

color = ["Blue","Green","Red","Orange","violet","Indigo","Yellow"];
o = ["th","st","nd","rd"];
alert(`1${o[1]} choice is ${color[0]}.
2${o[2]} choice is ${color[1]}.
3${o[o.length-1]} choice is ${color[2]}.`);

let student = {
    firstname: "Mate",
    surname: "Gotua",
};
student['age'] = 24;
student.telephone = "559865203";
delete student.firstname;
student.firstname = "Gio";

