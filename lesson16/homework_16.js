class Student {
   constructor(name, lastName, birthDay) {
      this.name = name;
      this.lastName = lastName;
      this.birthDay = birthDay;
      this.grades = [];
      this.attendance = new Array(25).fill(null);
   }
   getAge() {
      return new Date().getFullYear() - this.birthDay;
   }
   getAverageGrade() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
   }
   present() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
         this.attendance[index] = true;
      } else {
         console.log("Масив заповнений!");
      }
   }
   absent() {
      const index = this.attendance.indexOf(null);
      if (index !== -1) {
         this.attendance[index] = false;
      } else {
         console.log("Масив заповнений!");
      }
   }
   summary() {
      const avgGrade = this.getAverageGrade();
      const attendedSessions = this.attendance.filter(status => status !== null);
      if (attendedSessions.length === 0) return "Дані про відвідування відсутні";
      const presenceCount = attendedSessions.filter(status => status === true).length;
      const avgAttendance = presenceCount / attendedSessions.length;
      if (avgGrade > 90 && avgAttendance > 0.9) {
         return "Молодець!";
      } else if (avgGrade > 80 || avgAttendance > 0.9) {
         return "Добре, але можна краще";
      } else {
         return "Редиска!";
      }
   }
}


// Студенти:
const student1 = new Student("Іван", "Іванченко", 2000);
for (let i = 0; i < 10; i++) student1.grades.push(95);
for (let i = 0; i < 20; i++) student1.present();
console.log(`${student1.name}: ${student1.summary()}`);

const student2 = new Student("Наталія", "Коваленко", 2001);
student2.grades.push(80, 90, 92);
for (let i = 0; i < 15; i++) student2.present();
for (let i = 0; i < 5; i++) student2.absent();
console.log(`${student2.name}: ${student2.summary()}`);




