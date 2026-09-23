// ============================
// DATA STORAGE
// ============================

let students = [];
let teachers = [];
let classes = [];
let attendance = [];
let fees = [];
let results = [];
let editingStudentId = null;
let editingTeacherId = null;
let editingClassId = null;
let editingResultId = null;

// ============================
// DOM ELEMENTS
// ============================

// Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const pageTitle = document.getElementById('page-title');

// Pages
const pages = document.querySelectorAll('.page');

// Dashboard Elements
const totalStudentsEl = document.getElementById('total-students');
const totalTeachersEl = document.getElementById('total-teachers');
const totalClassesEl = document.getElementById('total-classes');
const presentTodayEl = document.getElementById('present-today');
const absentTodayEl = document.getElementById('absent-today');
const fesPaidEl = document.getElementById('fees-paid');
const fesPendingEl = document.getElementById('fees-pending');

// Student Form Elements
const studentForm = document.getElementById('student-form');
const toggleStudentFormBtn = document.getElementById('toggle-student-form');
const cancelStudentBtn = document.getElementById('cancel-student-btn');
const studentSubmitBtn = document.getElementById('student-submit-btn');
const studentNameInput = document.getElementById('student-name');
const fatherNameInput = document.getElementById('father-name');
const studentClassInput = document.getElementById('student-class');
const rollNumberInput = document.getElementById('roll-number');
const genderSelect = document.getElementById('gender');
const ageInput = document.getElementById('age');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const studentsBody = document.getElementById('students-body');

// Teacher Form Elements
const teacherForm = document.getElementById('teacher-form');
const toggleTeacherFormBtn = document.getElementById('toggle-teacher-form');
const cancelTeacherBtn = document.getElementById('cancel-teacher-btn');
const teacherSubmitBtn = document.getElementById('teacher-submit-btn');
const teacherNameInput = document.getElementById('teacher-name');
const subjectInput = document.getElementById('subject');
const teacherClassInput = document.getElementById('teacher-class');
const teacherPhoneInput = document.getElementById('teacher-phone');
const teacherEmailInput = document.getElementById('teacher-email');
const teachersBody = document.getElementById('teachers-body');

// Class Form Elements
const classForm = document.getElementById('class-form');
const toggleClassFormBtn = document.getElementById('toggle-class-form');
const cancelClassBtn = document.getElementById('cancel-class-btn');
const classSubmitBtn = document.getElementById('class-submit-btn');
const classNameInput = document.getElementById('class-name');
const classTeacherInput = document.getElementById('class-teacher');
const roomNumberInput = document.getElementById('room-number');
const classesBody = document.getElementById('classes-body');

// Attendance Elements
const attendanceBody = document.getElementById('attendance-body');
const attendanceClassFilter = document.getElementById('attendance-class-filter');

// Fees Elements
const feesBody = document.getElementById('fees-body');
const totalPaidEl = document.getElementById('total-paid');
const totalPendingEl = document.getElementById('total-pending');

// Result Form Elements
const resultForm = document.getElementById('result-form');
const toggleResultFormBtn = document.getElementById('toggle-result-form');
const cancelResultBtn = document.getElementById('cancel-result-btn');
const resultSubmitBtn = document.getElementById('result-submit-btn');
const resultStudentSelect = document.getElementById('result-student');
const resultClassInput = document.getElementById('result-class');
const englishMarksInput = document.getElementById('english-marks');
const mathMarksInput = document.getElementById('math-marks');
const computerMarksInput = document.getElementById('computer-marks');
const resultsBody = document.getElementById('results-body');

// Search Elements
const searchInput = document.getElementById('search-input');
const searchResultsBody = document.getElementById('search-results-body');

// ============================
// SAMPLE DATA
// ============================

function initializeSampleData() {
    const sampleStudents = [
        { id: 1, name: "Ali Ahmed", fatherName: "Ahmed Hassan", className: "9th", rollNumber: "101", gender: "Male", age: 15, phone: "03001234567", email: "ali@example.com", address: "Islamabad" },
        { id: 2, name: "Fatima Khan", fatherName: "Khan Sahab", className: "9th", rollNumber: "102", gender: "Female", age: 15, phone: "03002234567", email: "fatima@example.com", address: "Rawalpindi" },
        { id: 3, name: "Hassan Ali", fatherName: "Ali Khan", className: "10th", rollNumber: "201", gender: "Male", age: 16, phone: "03003234567", email: "hassan@example.com", address: "Islamabad" },
        { id: 4, name: "Aisha Malik", fatherName: "Malik Ahmed", className: "10th", rollNumber: "202", gender: "Female", age: 16, phone: "03004234567", email: "aisha@example.com", address: "Karachi" },
        { id: 5, name: "Muhammad Usman", fatherName: "Usman Khan", className: "9th", rollNumber: "103", gender: "Male", age: 15, phone: "03005234567", email: "usman@example.com", address: "Lahore" }
    ];

    const sampleTeachers = [
        { id: 1, name: "Mr. Farooq Ahmed", subject: "English", className: "9th", phone: "03111234567", email: "farooq@example.com" },
        { id: 2, name: "Dr. Sabeen Khan", subject: "Mathematics", className: "10th", phone: "03112234567", email: "sabeen@example.com" },
        { id: 3, name: "Mr. Hussain Ali", subject: "Computer", className: "9th", phone: "03113234567", email: "hussain@example.com" }
    ];

    const sampleClasses = [
        { id: 1, name: "9th A", teacher: "Mr. Farooq Ahmed", roomNumber: "101" },
        { id: 2, name: "9th B", teacher: "Mr. Hussain Ali", roomNumber: "102" },
        { id: 3, name: "10th A", teacher: "Dr. Sabeen Khan", roomNumber: "201" },
        { id: 4, name: "10th B", teacher: "Mr. Farooq Ahmed", roomNumber: "202" }
    ];

    const sampleAttendance = [
        { id: 1, studentId: 1, date: getTodayDate(), status: "present" },
        { id: 2, studentId: 2, date: getTodayDate(), status: "absent" },
        { id: 3, studentId: 3, date: getTodayDate(), status: "present" },
        { id: 4, studentId: 4, date: getTodayDate(), status: "present" },
        { id: 5, studentId: 5, date: getTodayDate(), status: "absent" }
    ];

    const sampleFees = [
        { id: 1, studentId: 1, studentName: "Ali Ahmed", className: "9th", monthlyFee: 5000, paidAmount: 5000 },
        { id: 2, studentId: 2, studentName: "Fatima Khan", className: "9th", monthlyFee: 5000, paidAmount: 3000 },
        { id: 3, studentId: 3, studentName: "Hassan Ali", className: "10th", monthlyFee: 5500, paidAmount: 5500 },
        { id: 4, studentId: 4, studentName: "Aisha Malik", className: "10th", monthlyFee: 5500, paidAmount: 2500 },
        { id: 5, studentId: 5, studentName: "Muhammad Usman", className: "9th", monthlyFee: 5000, paidAmount: 0 }
    ];

    const sampleResults = [
        { id: 1, studentId: 1, studentName: "Ali Ahmed", className: "9th", english: 85, mathematics: 90, computer: 88 },
        { id: 2, studentId: 2, studentName: "Fatima Khan", className: "9th", english: 92, mathematics: 88, computer: 95 },
        { id: 3, studentId: 3, studentName: "Hassan Ali", className: "10th", english: 78, mathematics: 82, computer: 80 }
    ];

    students = sampleStudents;
    teachers = sampleTeachers;
    classes = sampleClasses;
    attendance = sampleAttendance;
    fees = sampleFees;
    results = sampleResults;
}

// ============================
// HELPER FUNCTIONS
// ============================

function getTodayDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

function updateCurrentDate() {
    const dateEl = document.getElementById('current-date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = new Date().toLocaleDateString('en-US', options);
}

function generateId(array) {
    if (array.length === 0) return 1;
    return Math.max(...array.map(item => item.id)) + 1;
}

function clearFormErrors() {
    const errorMessages = document.querySelectorAll('.error-msg');
    errorMessages.forEach(msg => msg.textContent = '');
}

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10,}$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// ============================
// STUDENT FUNCTIONS
// ============================

function displayStudents() {
    studentsBody.innerHTML = '';

    if (students.length === 0) {
        studentsBody.innerHTML = '<tr><td colspan="7" class="no-data">No students added yet</td></tr>';
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.className}</td>
            <td>${student.gender}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>
                <div class="btn-actions">
                    <button class="btn btn-warning btn-small" onclick="editStudent(${student.id})">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteStudent(${student.id})">Delete</button>
                </div>
            </td>
        `;
        studentsBody.appendChild(row);
    });
}

function validateStudentForm() {
    clearFormErrors();
    let isValid = true;

    if (studentNameInput.value.trim() === '') {
        showError('student-name-error', 'Name is required');
        isValid = false;
    }

    if (fatherNameInput.value.trim() === '') {
        showError('father-name-error', 'Father name is required');
        isValid = false;
    }

    if (studentClassInput.value.trim() === '') {
        showError('student-class-error', 'Class is required');
        isValid = false;
    }

    if (rollNumberInput.value.trim() === '') {
        showError('roll-number-error', 'Roll number is required');
        isValid = false;
    }

    if (genderSelect.value === '') {
        showError('gender-error', 'Gender is required');
        isValid = false;
    }

    if (ageInput.value === '' || isNaN(ageInput.value) || ageInput.value < 1) {
        showError('age-error', 'Valid age is required');
        isValid = false;
    }

    if (phoneInput.value.trim() === '') {
        showError('phone-error', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(phoneInput.value)) {
        showError('phone-error', 'Valid phone number is required');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError('email-error', 'Email is required');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        showError('email-error', 'Valid email is required');
        isValid = false;
    }

    if (addressInput.value.trim() === '') {
        showError('address-error', 'Address is required');
        isValid = false;
    }

    return isValid;
}

function addOrUpdateStudent(e) {
    e.preventDefault();

    if (!validateStudentForm()) {
        return;
    }

    const studentData = {
        name: studentNameInput.value.trim(),
        fatherName: fatherNameInput.value.trim(),
        className: studentClassInput.value.trim(),
        rollNumber: rollNumberInput.value.trim(),
        gender: genderSelect.value,
        age: parseInt(ageInput.value),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim(),
        address: addressInput.value.trim()
    };

    if (editingStudentId) {
        const studentIndex = students.findIndex(s => s.id === editingStudentId);
        if (studentIndex > -1) {
            students[studentIndex] = { ...students[studentIndex], ...studentData };
        }
        editingStudentId = null;
        studentSubmitBtn.textContent = 'Save Student';
    } else {
        const newStudent = {
            id: generateId(students),
            ...studentData
        };
        students.push(newStudent);
    }

    resetStudentForm();
    displayStudents();
    updateDashboard();
    saveToLocalStorage();
}

function editStudent(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    studentNameInput.value = student.name;
    fatherNameInput.value = student.fatherName;
    studentClassInput.value = student.className;
    rollNumberInput.value = student.rollNumber;
    genderSelect.value = student.gender;
    ageInput.value = student.age;
    phoneInput.value = student.phone;
    emailInput.value = student.email;
    addressInput.value = student.address;

    editingStudentId = id;
    studentForm.classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Edit Student';
    studentSubmitBtn.textContent = 'Update Student';
}

function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        students = students.filter(s => s.id !== id);
        displayStudents();
        updateDashboard();
        saveToLocalStorage();
    }
}

function resetStudentForm() {
    studentForm.reset();
    studentForm.classList.add('hidden');
    editingStudentId = null;
    document.getElementById('form-title').textContent = 'Add New Student';
    studentSubmitBtn.textContent = 'Save Student';
    clearFormErrors();
}

// ============================
// TEACHER FUNCTIONS
// ============================

function displayTeachers() {
    teachersBody.innerHTML = '';

    if (teachers.length === 0) {
        teachersBody.innerHTML = '<tr><td colspan="6" class="no-data">No teachers added yet</td></tr>';
        return;
    }

    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.name}</td>
            <td>${teacher.subject}</td>
            <td>${teacher.className}</td>
            <td>${teacher.phone}</td>
            <td>${teacher.email}</td>
            <td>
                <div class="btn-actions">
                    <button class="btn btn-warning btn-small" onclick="editTeacher(${teacher.id})">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteTeacher(${teacher.id})">Delete</button>
                </div>
            </td>
        `;
        teachersBody.appendChild(row);
    });
}

function validateTeacherForm() {
    clearFormErrors();
    let isValid = true;

    if (teacherNameInput.value.trim() === '') {
        showError('teacher-name-error', 'Teacher name is required');
        isValid = false;
    }

    if (subjectInput.value.trim() === '') {
        showError('subject-error', 'Subject is required');
        isValid = false;
    }

    if (teacherClassInput.value.trim() === '') {
        showError('teacher-class-error', 'Class is required');
        isValid = false;
    }

    if (teacherPhoneInput.value.trim() === '') {
        showError('teacher-phone-error', 'Phone number is required');
        isValid = false;
    } else if (!validatePhone(teacherPhoneInput.value)) {
        showError('teacher-phone-error', 'Valid phone number is required');
        isValid = false;
    }

    if (teacherEmailInput.value.trim() === '') {
        showError('teacher-email-error', 'Email is required');
        isValid = false;
    } else if (!validateEmail(teacherEmailInput.value)) {
        showError('teacher-email-error', 'Valid email is required');
        isValid = false;
    }

    return isValid;
}

function addOrUpdateTeacher(e) {
    e.preventDefault();

    if (!validateTeacherForm()) {
        return;
    }

    const teacherData = {
        name: teacherNameInput.value.trim(),
        subject: subjectInput.value.trim(),
        className: teacherClassInput.value.trim(),
        phone: teacherPhoneInput.value.trim(),
        email: teacherEmailInput.value.trim()
    };

    if (editingTeacherId) {
        const teacherIndex = teachers.findIndex(t => t.id === editingTeacherId);
        if (teacherIndex > -1) {
            teachers[teacherIndex] = { ...teachers[teacherIndex], ...teacherData };
        }
        editingTeacherId = null;
        teacherSubmitBtn.textContent = 'Save Teacher';
    } else {
        const newTeacher = {
            id: generateId(teachers),
            ...teacherData
        };
        teachers.push(newTeacher);
    }

    resetTeacherForm();
    displayTeachers();
    updateDashboard();
    saveToLocalStorage();
}

function editTeacher(id) {
    const teacher = teachers.find(t => t.id === id);
    if (!teacher) return;

    teacherNameInput.value = teacher.name;
    subjectInput.value = teacher.subject;
    teacherClassInput.value = teacher.className;
    teacherPhoneInput.value = teacher.phone;
    teacherEmailInput.value = teacher.email;

    editingTeacherId = id;
    teacherForm.classList.remove('hidden');
    document.getElementById('teacher-form-title').textContent = 'Edit Teacher';
    teacherSubmitBtn.textContent = 'Update Teacher';
}

function deleteTeacher(id) {
    if (confirm('Are you sure you want to delete this teacher?')) {
        teachers = teachers.filter(t => t.id !== id);
        displayTeachers();
        updateDashboard();
        saveToLocalStorage();
    }
}

function resetTeacherForm() {
    teacherForm.reset();
    teacherForm.classList.add('hidden');
    editingTeacherId = null;
    document.getElementById('teacher-form-title').textContent = 'Add New Teacher';
    teacherSubmitBtn.textContent = 'Save Teacher';
    clearFormErrors();
}

// ============================
// CLASS FUNCTIONS
// ============================

function displayClasses() {
    classesBody.innerHTML = '';

    if (classes.length === 0) {
        classesBody.innerHTML = '<tr><td colspan="5" class="no-data">No classes added yet</td></tr>';
        return;
    }

    classes.forEach(cls => {
        const studentCount = students.filter(s => s.className === cls.name).length;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cls.name}</td>
            <td>${cls.teacher}</td>
            <td>${cls.roomNumber}</td>
            <td>${studentCount}</td>
            <td>
                <div class="btn-actions">
                    <button class="btn btn-warning btn-small" onclick="editClass(${cls.id})">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteClass(${cls.id})">Delete</button>
                </div>
            </td>
        `;
        classesBody.appendChild(row);
    });
}

function validateClassForm() {
    clearFormErrors();
    let isValid = true;

    if (classNameInput.value.trim() === '') {
        showError('class-name-error', 'Class name is required');
        isValid = false;
    }

    if (classTeacherInput.value.trim() === '') {
        showError('class-teacher-error', 'Class teacher name is required');
        isValid = false;
    }

    if (roomNumberInput.value.trim() === '') {
        showError('room-number-error', 'Room number is required');
        isValid = false;
    }

    return isValid;
}

function addOrUpdateClass(e) {
    e.preventDefault();

    if (!validateClassForm()) {
        return;
    }

    const classData = {
        name: classNameInput.value.trim(),
        teacher: classTeacherInput.value.trim(),
        roomNumber: roomNumberInput.value.trim()
    };

    if (editingClassId) {
        const classIndex = classes.findIndex(c => c.id === editingClassId);
        if (classIndex > -1) {
            classes[classIndex] = { ...classes[classIndex], ...classData };
        }
        editingClassId = null;
        classSubmitBtn.textContent = 'Save Class';
    } else {
        const newClass = {
            id: generateId(classes),
            ...classData
        };
        classes.push(newClass);
    }

    resetClassForm();
    displayClasses();
    updateDashboard();
    saveToLocalStorage();
}

function editClass(id) {
    const cls = classes.find(c => c.id === id);
    if (!cls) return;

    classNameInput.value = cls.name;
    classTeacherInput.value = cls.teacher;
    roomNumberInput.value = cls.roomNumber;

    editingClassId = id;
    classForm.classList.remove('hidden');
    document.getElementById('class-form-title').textContent = 'Edit Class';
    classSubmitBtn.textContent = 'Update Class';
}

function deleteClass(id) {
    if (confirm('Are you sure you want to delete this class?')) {
        classes = classes.filter(c => c.id !== id);
        displayClasses();
        updateDashboard();
        saveToLocalStorage();
    }
}

function resetClassForm() {
    classForm.reset();
    classForm.classList.add('hidden');
    editingClassId = null;
    document.getElementById('class-form-title').textContent = 'Add New Class';
    classSubmitBtn.textContent = 'Save Class';
    clearFormErrors();
}

// ============================
// ATTENDANCE FUNCTIONS
// ============================

function displayAttendance() {
    attendanceBody.innerHTML = '';

    const classFilter = attendanceClassFilter.value;
    let studentsToShow = students;

    if (classFilter) {
        studentsToShow = students.filter(s => s.className === classFilter);
    }

    if (studentsToShow.length === 0) {
        attendanceBody.innerHTML = '<tr><td colspan="5" class="no-data">No students found</td></tr>';
        return;
    }

    studentsToShow.forEach(student => {
        const attendanceRecord = attendance.find(a => a.studentId === student.id && a.date === getTodayDate());
        const status = attendanceRecord ? attendanceRecord.status : 'absent';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.className}</td>
            <td>
                <span class="status-badge status-${status}">
                    ${status.toUpperCase()}
                </span>
            </td>
            <td>
                <div class="btn-actions">
                    <button class="btn btn-success btn-small" onclick="markAttendance(${student.id}, 'present')">Present</button>
                    <button class="btn btn-danger btn-small" onclick="markAttendance(${student.id}, 'absent')">Absent</button>
                </div>
            </td>
        `;
        attendanceBody.appendChild(row);
    });
}

function markAttendance(studentId, status) {
    const today = getTodayDate();
    let record = attendance.find(a => a.studentId === studentId && a.date === today);

    if (record) {
        record.status = status;
    } else {
        record = {
            id: generateId(attendance),
            studentId: studentId,
            date: today,
            status: status
        };
        attendance.push(record);
    }

    displayAttendance();
    updateDashboard();
    saveToLocalStorage();
}

function populateAttendanceFilter() {
    attendanceClassFilter.innerHTML = '<option value="">All Classes</option>';

    const uniqueClasses = [...new Set(students.map(s => s.className))];
    uniqueClasses.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls;
        option.textContent = cls;
        attendanceClassFilter.appendChild(option);
    });
}

// ============================
// FEE FUNCTIONS
// ============================

function displayFees() {
    feesBody.innerHTML = '';

    if (fees.length === 0) {
        feesBody.innerHTML = '<tr><td colspan="7" class="no-data">No fee records found</td></tr>';
        return;
    }

    fees.forEach(fee => {
        const remaining = fee.monthlyFee - fee.paidAmount;
        const status = fee.paidAmount >= fee.monthlyFee ? 'paid' : 'pending';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fee.studentName}</td>
            <td>${fee.className}</td>
            <td>${fee.monthlyFee}</td>
            <td>${fee.paidAmount}</td>
            <td>${remaining}</td>
            <td>
                <span class="status-badge status-${status}">
                    ${status.toUpperCase()}
                </span>
            </td>
            <td>
                <button class="btn btn-primary btn-small" onclick="updateFeePayment(${fee.id})">Pay Fee</button>
            </td>
        `;
        feesBody.appendChild(row);
    });

    updateFeesSummary();
}

function updateFeePayment(feeId) {
    const fee = fees.find(f => f.id === feeId);
    if (!fee) return;

    const amount = prompt(`Enter payment amount (Monthly Fee: ${fee.monthlyFee}, Already Paid: ${fee.paidAmount})`);
    if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
        const paymentAmount = parseFloat(amount);
        fee.paidAmount += paymentAmount;
        displayFees();
        updateDashboard();
        saveToLocalStorage();
    }
}

function updateFeesSummary() {
    let totalPaid = 0;
    let totalPending = 0;

    fees.forEach(fee => {
        totalPaid += fee.paidAmount;
        const remaining = fee.monthlyFee - fee.paidAmount;
        if (remaining > 0) {
            totalPending += remaining;
        }
    });

    totalPaidEl.textContent = totalPaid;
    totalPendingEl.textContent = totalPending;
}

// ============================
// RESULT FUNCTIONS
// ============================

function calculateResultStats(result) {
    const total = result.english + result.mathematics + result.computer;
    const percentage = Math.round((total / 300) * 100);

    let grade = 'F';
    if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';

    const status = percentage >= 50 ? 'Pass' : 'Fail';

    return { total, percentage, grade, status };
}

function displayResults() {
    resultsBody.innerHTML = '';

    if (results.length === 0) {
        resultsBody.innerHTML = '<tr><td colspan="10" class="no-data">No results added yet</td></tr>';
        return;
    }

    results.forEach(result => {
        const stats = calculateResultStats(result);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.studentName}</td>
            <td>${result.className}</td>
            <td>${result.english}</td>
            <td>${result.mathematics}</td>
            <td>${result.computer}</td>
            <td>${stats.total}</td>
            <td>${stats.percentage}%</td>
            <td><strong>${stats.grade}</strong></td>
            <td>
                <span class="status-badge status-${stats.status.toLowerCase()}">
                    ${stats.status.toUpperCase()}
                </span>
            </td>
            <td>
                <div class="btn-actions">
                    <button class="btn btn-warning btn-small" onclick="editResult(${result.id})">Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteResult(${result.id})">Delete</button>
                </div>
            </td>
        `;
        resultsBody.appendChild(row);
    });
}

function populateResultStudentSelect() {
    resultStudentSelect.innerHTML = '<option value="">Select Student</option>';

    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        option.textContent = `${student.name} (${student.className})`;
        option.dataset.class = student.className;
        resultStudentSelect.appendChild(option);
    });
}

function validateResultForm() {
    clearFormErrors();
    let isValid = true;

    if (resultStudentSelect.value === '') {
        showError('result-student-error', 'Student is required');
        isValid = false;
    }

    if (resultClassInput.value.trim() === '') {
        showError('result-class-error', 'Class is required');
        isValid = false;
    }

    const englishMarks = parseInt(englishMarksInput.value);
    if (isNaN(englishMarks) || englishMarks < 0 || englishMarks > 100) {
        showError('english-marks-error', 'English marks must be between 0 and 100');
        isValid = false;
    }

    const mathMarks = parseInt(mathMarksInput.value);
    if (isNaN(mathMarks) || mathMarks < 0 || mathMarks > 100) {
        showError('math-marks-error', 'Math marks must be between 0 and 100');
        isValid = false;
    }

    const computerMarks = parseInt(computerMarksInput.value);
    if (isNaN(computerMarks) || computerMarks < 0 || computerMarks > 100) {
        showError('computer-marks-error', 'Computer marks must be between 0 and 100');
        isValid = false;
    }

    return isValid;
}

function addOrUpdateResult(e) {
    e.preventDefault();

    if (!validateResultForm()) {
        return;
    }

    const selectedStudent = students.find(s => s.id === parseInt(resultStudentSelect.value));

    const resultData = {
        studentId: parseInt(resultStudentSelect.value),
        studentName: selectedStudent.name,
        className: resultClassInput.value.trim(),
        english: parseInt(englishMarksInput.value),
        mathematics: parseInt(mathMarksInput.value),
        computer: parseInt(computerMarksInput.value)
    };

    if (editingResultId) {
        const resultIndex = results.findIndex(r => r.id === editingResultId);
        if (resultIndex > -1) {
            results[resultIndex] = { ...results[resultIndex], ...resultData };
        }
        editingResultId = null;
        resultSubmitBtn.textContent = 'Save Result';
    } else {
        const newResult = {
            id: generateId(results),
            ...resultData
        };
        results.push(newResult);
    }

    resetResultForm();
    displayResults();
    updateDashboard();
    saveToLocalStorage();
}

function editResult(id) {
    const result = results.find(r => r.id === id);
    if (!result) return;

    resultStudentSelect.value = result.studentId;
    resultClassInput.value = result.className;
    englishMarksInput.value = result.english;
    mathMarksInput.value = result.mathematics;
    computerMarksInput.value = result.computer;

    editingResultId = id;
    resultForm.classList.remove('hidden');
    document.getElementById('result-form-title').textContent = 'Edit Result';
    resultSubmitBtn.textContent = 'Update Result';
}

function deleteResult(id) {
    if (confirm('Are you sure you want to delete this result?')) {
        results = results.filter(r => r.id !== id);
        displayResults();
        updateDashboard();
        saveToLocalStorage();
    }
}

function resetResultForm() {
    resultForm.reset();
    resultForm.classList.add('hidden');
    editingResultId = null;
    document.getElementById('result-form-title').textContent = 'Add Result';
    resultSubmitBtn.textContent = 'Save Result';
    clearFormErrors();
}

// ============================
// SEARCH FUNCTIONS
// ============================

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const searchType = document.querySelector('input[name="search-type"]:checked').value;

    if (searchTerm.trim() === '') {
        searchResultsBody.innerHTML = '<tr><td colspan="6" class="no-data">Start typing to search...</td></tr>';
        return;
    }

    let filteredStudents = [];

    if (searchType === 'name') {
        filteredStudents = students.filter(s => s.name.toLowerCase().includes(searchTerm));
    } else if (searchType === 'roll') {
        filteredStudents = students.filter(s => s.rollNumber.toLowerCase().includes(searchTerm));
    } else if (searchType === 'class') {
        filteredStudents = students.filter(s => s.className.toLowerCase().includes(searchTerm));
    }

    searchResultsBody.innerHTML = '';

    if (filteredStudents.length === 0) {
        searchResultsBody.innerHTML = '<tr><td colspan="6" class="no-data">No results found</td></tr>';
        return;
    }

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.className}</td>
            <td>${student.gender}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
        `;
        searchResultsBody.appendChild(row);
    });
}

// ============================
// DASHBOARD FUNCTIONS
// ============================

function updateDashboard() {
    totalStudentsEl.textContent = students.length;
    totalTeachersEl.textContent = teachers.length;
    totalClassesEl.textContent = classes.length;

    const today = getTodayDate();
    const presentCount = attendance.filter(a => a.date === today && a.status === 'present').length;
    const absentCount = attendance.filter(a => a.date === today && a.status === 'absent').length;

    presentTodayEl.textContent = presentCount;
    absentTodayEl.textContent = absentCount;

    let totalPaidFees = 0;
    let totalPendingFees = 0;

    fees.forEach(fee => {
        totalPaidFees += fee.paidAmount;
        const remaining = fee.monthlyFee - fee.paidAmount;
        if (remaining > 0) {
            totalPendingFees += remaining;
        }
    });

    fesPaidEl.textContent = totalPaidFees;
    fesPendingEl.textContent = totalPendingFees;

    displayRecentStudents();
    displayRecentResults();
}

function displayRecentStudents() {
    const recentStudentsBody = document.getElementById('recent-students-body');
    recentStudentsBody.innerHTML = '';

    const recentStudents = students.slice(-3).reverse();

    if (recentStudents.length === 0) {
        recentStudentsBody.innerHTML = '<tr><td colspan="4" class="no-data">No students yet</td></tr>';
        return;
    }

    recentStudents.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.className}</td>
            <td>${student.email}</td>
        `;
        recentStudentsBody.appendChild(row);
    });
}

function displayRecentResults() {
    const recentResultsBody = document.getElementById('recent-results-body');
    recentResultsBody.innerHTML = '';

    const recentResults = results.slice(-3).reverse();

    if (recentResults.length === 0) {
        recentResultsBody.innerHTML = '<tr><td colspan="5" class="no-data">No results yet</td></tr>';
        return;
    }

    recentResults.forEach(result => {
        const stats = calculateResultStats(result);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.studentName}</td>
            <td>${result.className}</td>
            <td>${stats.total}</td>
            <td>${stats.percentage}%</td>
            <td><strong>${stats.grade}</strong></td>
        `;
        recentResultsBody.appendChild(row);
    });
}

// ============================
// LOCAL STORAGE FUNCTIONS
// ============================

function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
    localStorage.setItem('teachers', JSON.stringify(teachers));
    localStorage.setItem('classes', JSON.stringify(classes));
    localStorage.setItem('attendance', JSON.stringify(attendance));
    localStorage.setItem('fees', JSON.stringify(fees));
    localStorage.setItem('results', JSON.stringify(results));
}

function loadFromLocalStorage() {
    const savedStudents = localStorage.getItem('students');
    const savedTeachers = localStorage.getItem('teachers');
    const savedClasses = localStorage.getItem('classes');
    const savedAttendance = localStorage.getItem('attendance');
    const savedFees = localStorage.getItem('fees');
    const savedResults = localStorage.getItem('results');

    students = savedStudents ? JSON.parse(savedStudents) : [];
    teachers = savedTeachers ? JSON.parse(savedTeachers) : [];
    classes = savedClasses ? JSON.parse(savedClasses) : [];
    attendance = savedAttendance ? JSON.parse(savedAttendance) : [];
    fees = savedFees ? JSON.parse(savedFees) : [];
    results = savedResults ? JSON.parse(savedResults) : [];

    if (students.length === 0) {
        initializeSampleData();
        saveToLocalStorage();
    }
}

// ============================
// NAVIGATION FUNCTIONS
// ============================

function showPage(pageName) {
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    navButtons.forEach(btn => btn.classList.remove('active'));
    const selectedBtn = document.querySelector(`[data-page="${pageName}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }

    const titleMap = {
        'dashboard': 'Dashboard',
        'students': 'Student Management',
        'teachers': 'Teacher Management',
        'classes': 'Class Management',
        'attendance': 'Attendance Management',
        'fees': 'Fee Management',
        'results': 'Result Management',
        'search': 'Search System'
    };

    pageTitle.textContent = titleMap[pageName] || 'Dashboard';
}

// ============================
// EVENT LISTENERS
// ============================

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const pageName = btn.getAttribute('data-page');
        showPage(pageName);

        if (pageName === 'attendance') {
            populateAttendanceFilter();
            displayAttendance();
        } else if (pageName === 'results') {
            populateResultStudentSelect();
            displayResults();
        }
    });
});

// Student Events
toggleStudentFormBtn.addEventListener('click', () => {
    studentForm.classList.toggle('hidden');
});

cancelStudentBtn.addEventListener('click', () => {
    resetStudentForm();
});

studentForm.addEventListener('submit', addOrUpdateStudent);

// Teacher Events
toggleTeacherFormBtn.addEventListener('click', () => {
    teacherForm.classList.toggle('hidden');
});

cancelTeacherBtn.addEventListener('click', () => {
    resetTeacherForm();
});

teacherForm.addEventListener('submit', addOrUpdateTeacher);

// Class Events
toggleClassFormBtn.addEventListener('click', () => {
    classForm.classList.toggle('hidden');
});

cancelClassBtn.addEventListener('click', () => {
    resetClassForm();
});

classForm.addEventListener('submit', addOrUpdateClass);

// Attendance Events
attendanceClassFilter.addEventListener('change', displayAttendance);

// Result Events
toggleResultFormBtn.addEventListener('click', () => {
    resultForm.classList.toggle('hidden');
});

cancelResultBtn.addEventListener('click', () => {
    resetResultForm();
});

resultForm.addEventListener('submit', addOrUpdateResult);

// Search Events
searchInput.addEventListener('input', performSearch);
document.querySelectorAll('input[name="search-type"]').forEach(radio => {
    radio.addEventListener('change', performSearch);
});

// ============================
// INITIAL LOAD
// ============================

function initializeApp() {
    loadFromLocalStorage();
    updateCurrentDate();
    showPage('dashboard');
    displayStudents();
    displayTeachers();
    displayClasses();
    displayAttendance();
    displayFees();
    displayResults();
    updateDashboard();
    populateResultStudentSelect();
    populateAttendanceFilter();
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);
