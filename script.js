let students = {
    "1": [
        { id: 1, name: "Ahmad Rizki", nis: "001", status: "non", note: "", class: "1" },
        { id: 2, name: "Siti Nurhaliza", nis: "002", status: "non", note: "", class: "1" },
        { id: 3, name: "Budi Santoso", nis: "003", status: "non", note: "", class: "1" }
    ],
    "2": [
        { id: 4, name: "Dewi Sartika", nis: "004", status: "non", note: "", class: "2" },
        { id: 5, name: "Fajar Nugraha", nis: "005", status: "non", note: "", class: "2" },
        { id: 6, name: "Gita Savitri", nis: "006", status: "non", note: "", class: "2" }
    ],
    "3": [
        { id: 7, name: "Hendra Wijaya", nis: "007", status: "non", note: "", class: "3" },
        { id: 8, name: "Indah Permata", nis: "008", status: "non", note: "", class: "3" },
        { id: 9, name: "Joko Susilo", nis: "009", status: "non", note: "", class: "3" }
    ],
    "4": [
        { id: 10, name: "Kartika Sari", nis: "010", status: "non", note: "", class: "4" },
        { id: 11, name: "Lina Wijaya", nis: "011", status: "non", note: "", class: "4" },
        { id: 12, name: "Muhammad Ali", nis: "012", status: "non", note: "", class: "4" }
    ],
    "5": [
        { id: 13, name: "Nina Putri", nis: "013", status: "non", note: "", class: "5" },
        { id: 14, name: "Oscar Pratama", nis: "014", status: "non", note: "", class: "5" },
        { id: 15, name: "Putri Sari", nis: "015", status: "non", note: "", class: "5" }
    ],
    "6": [
        { id: 16, name: "Rudi Hartono", nis: "016", status: "non", note: "", class: "6" },
        { id: 17, name: "Siti Aminah", nis: "017", status: "non", note: "", class: "6" },
        { id: 18, name: "Tono Wijaya", nis: "018", status: "non", note: "", class: "6" }
    ]
};

// Data materi pembelajaran
let materials = {
    "Matematika": [
        {
            id: 1,
            subject: "Matematika",
            class: "4",
            title: "Operasi Hitung Bilangan Bulat",
            description: "Materi tentang penjumlahan, pengurangan, perkalian, dan pembagian bilangan bulat dengan berbagai contoh soal.",
            link: "https://example.com/matematika-bilangan-bulat",
            date: "2024-06-10"
        },
        {
            id: 2,
            subject: "Matematika",
            class: "5",
            title: "Pecahan dan Desimal",
            description: "Pembelajaran tentang konsep pecahan, desimal, dan operasi hitungnya.",
            link: "https://example.com/matematika-pecahan",
            date: "2024-06-09"
        }
    ],
    "Bahasa Indonesia": [
        {
            id: 3,
            subject: "Bahasa Indonesia",
            class: "4",
            title: "Teks Deskripsi",
            description: "Pembelajaran mengenai cara membuat dan memahami teks deskripsi dengan baik dan benar.",
            link: "https://example.com/bahasa-indonesia-deskripsi",
            date: "2024-06-08"
        }
    ],
    "IPA": [
        {
            id: 4,
            subject: "IPA",
            class: "4",
            title: "Siklus Air",
            description: "Penjelasan lengkap tentang proses siklus air di alam dan dampaknya bagi kehidupan.",
            link: "https://example.com/ipa-siklus-air",
            date: "2024-06-07"
        }
    ],
    "IPS": [
        {
            id: 5,
            subject: "IPS",
            class: "4",
            title: "Kenampakan Alam",
            description: "Materi tentang berbagai kenampakan alam di Indonesia dan pengaruhnya terhadap kehidupan.",
            link: "https://example.com/ips-kenampakan-alam",
            date: "2024-06-06"
        }
    ],
    "PKN": [
        {
            id: 6,
            subject: "PKN",
            class: "4",
            title: "Norma dan Peraturan",
            description: "Pembelajaran tentang norma-norma dalam kehidupan bermasyarakat dan peraturan yang berlaku.",
            link: "https://example.com/pkn-norma",
            date: "2024-06-05"
        }
    ]
};

// Data kalender nasional 2025
const nationalCalendar2025 = {
    holidays: [
        {
            date: "2025-01-01",
            title: "Tahun Baru 2025",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Tahun Baru 2025"
        },
        {
            date: "2025-01-28",
            title: "Tahun Baru Imlek 2576",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Tahun Baru Imlek 2576"
        },
        {
            date: "2025-02-14",
            title: "Isra Mikraj Nabi Muhammad SAW",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Isra Mikraj Nabi Muhammad SAW"
        },
        {
            date: "2025-03-11",
            title: "Hari Raya Nyepi",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Nyepi"
        },
        {
            date: "2025-03-31",
            title: "Wafat Isa Al Masih",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Wafat Isa Al Masih"
        },
        {
            date: "2025-04-18",
            title: "Hari Raya Idul Fitri",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Idul Fitri"
        },
        {
            date: "2025-04-19",
            title: "Hari Raya Idul Fitri",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Idul Fitri"
        },
        {
            date: "2025-05-01",
            title: "Hari Buruh Internasional",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Hari Buruh Internasional"
        },
        {
            date: "2025-05-09",
            title: "Hari Raya Waisak",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Waisak"
        },
        {
            date: "2025-05-29",
            title: "Kenaikan Isa Al Masih",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Kenaikan Isa Al Masih"
        },
        {
            date: "2025-06-01",
            title: "Hari Lahir Pancasila",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Hari Lahir Pancasila"
        },
        {
            date: "2025-06-17",
            title: "Hari Raya Idul Adha",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Idul Adha"
        },
        {
            date: "2025-07-17",
            title: "Tahun Baru Islam 1447 Hijriyah",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Tahun Baru Islam 1447 Hijriyah"
        },
        {
            date: "2025-08-17",
            title: "Hari Kemerdekaan RI",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Hari Kemerdekaan Republik Indonesia"
        },
        {
            date: "2025-09-07",
            title: "Maulid Nabi Muhammad SAW",
            type: "holiday",
            description: "Libur nasional dalam rangka peringatan Maulid Nabi Muhammad SAW"
        },
        {
            date: "2025-12-25",
            title: "Hari Raya Natal",
            type: "holiday",
            description: "Libur nasional dalam rangka perayaan Hari Raya Natal"
        }
    ],
    schoolEvents: [
        {
            date: "2025-01-06",
            title: "Awal Semester Genap",
            type: "academic",
            description: "Dimulainya kegiatan belajar mengajar semester genap tahun ajaran 2024/2025"
        },
        {
            date: "2025-02-17",
            title: "Penilaian Tengah Semester Genap",
            type: "exam",
            description: "Pelaksanaan Penilaian Tengah Semester (PTS) Genap"
        },
        {
            date: "2025-04-14",
            title: "Libur Awal Ramadhan",
            type: "holiday",
            description: "Libur awal bulan Ramadhan 1446 Hijriyah"
        },
        {
            date: "2025-05-19",
            title: "Ujian Sekolah",
            type: "exam",
            description: "Pelaksanaan Ujian Sekolah untuk kelas 6"
        },
        {
            date: "2025-06-02",
            title: "Ujian Nasional",
            type: "exam",
            description: "Pelaksanaan Ujian Nasional untuk kelas 6"
        },
        {
            date: "2025-06-23",
            title: "Pembagian Rapor Semester Genap",
            type: "academic",
            description: "Pembagian rapor semester genap tahun ajaran 2024/2025"
        },
        {
            date: "2025-06-24",
            title: "Libur Akhir Semester Genap",
            type: "holiday",
            description: "Dimulainya libur akhir semester genap tahun ajaran 2024/2025"
        },
        {
            date: "2025-07-14",
            title: "Awal Semester Ganjil",
            type: "academic",
            description: "Dimulainya kegiatan belajar mengajar semester ganjil tahun ajaran 2025/2026"
        }
    ]
};

// Get upcoming events
function getUpcomingEvents() {
    const today = new Date();
    const allEvents = [...nationalCalendar2025.holidays, ...nationalCalendar2025.schoolEvents];
    
    // Filter and sort upcoming events
    return allEvents
        .filter(event => new Date(event.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 10); // Get next 10 events
}

// Data pengumuman
const announcements = [
    {
        id: 1,
        title: "Libur Hari Raya Idul Fitri",
        content: "Sekolah akan libur pada tanggal 18-19 April 2025 dalam rangka perayaan Hari Raya Idul Fitri. Kegiatan belajar mengajar akan dimulai kembali pada tanggal 20 April 2025.",
        date: "2025-04-18",
        type: "holiday"
    },
    {
        id: 2,
        title: "Ujian Sekolah Kelas 6",
        content: "Ujian Sekolah untuk kelas 6 akan dilaksanakan pada tanggal 19 Mei 2025. Mohon siswa mempersiapkan diri dengan baik.",
        date: "2025-05-19",
        type: "exam"
    },
    {
        id: 3,
        title: "Awal Semester Genap",
        content: "Kegiatan belajar mengajar semester genap tahun ajaran 2024/2025 akan dimulai pada tanggal 6 Januari 2025.",
        date: "2025-01-06",
        type: "academic"
    }
];

// Load announcements
function loadAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Create calendar section
    const calendarSection = document.createElement('div');
    calendarSection.className = 'calendar-section mb-4';
    calendarSection.innerHTML = `
        <div class="calendar-header mb-3">
            <h3><i class="fas fa-calendar-alt me-2"></i>Kalender Akademik 2025</h3>
            <p class="text-muted">Informasi jadwal libur nasional dan kegiatan sekolah</p>
        </div>
        <div class="calendar-events">
            ${announcements.map(announcement => createEventCard(announcement)).join('')}
        </div>
    `;
    container.appendChild(calendarSection);
}

// Create event card
function createEventCard(event) {
    if (!event) return '';
    
    const eventType = getEventType(event.type);
    return `
        <div class="announcement-card ${eventType.class}">
            <div class="d-flex align-items-start">
                <div class="me-3">
                    <i class="${eventType.icon} fa-2x"></i>
                </div>
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="mb-1">${event.title || ''}</h5>
                        <div>
                            <span class="badge ${eventType.badge} me-2">${eventType.label}</span>
                            <small class="text-muted">${formatDate(event.date)}</small>
                        </div>
                    </div>
                    <p class="mb-0">${event.content || ''}</p>
                </div>
            </div>
        </div>
    `;
}

// Get event type information
function getEventType(type) {
    const types = {
        'holiday': {
            icon: 'fas fa-calendar-day',
            label: 'Libur Nasional',
            class: 'border-warning',
            badge: 'bg-warning'
        },
        'exam': {
            icon: 'fas fa-clipboard-list',
            label: 'Ujian',
            class: 'border-danger',
            badge: 'bg-danger'
        },
        'academic': {
            icon: 'fas fa-graduation-cap',
            label: 'Kegiatan Akademik',
            class: 'border-primary',
            badge: 'bg-primary'
        }
    };
    return types[type] || types.academic;
}

// Format date
function formatDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('id-ID', options);
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateString;
    }
}

let teacherProfile = {}; // Inisialisasi sebagai objek kosong

// ======== AUTH & SESSION ========
function getGuruUsers() {
    return JSON.parse(localStorage.getItem('guru_users') || '[]');
}
function setGuruUsers(users) {
    localStorage.setItem('guru_users', JSON.stringify(users));
}
function getLoggedInGuru() {
    return localStorage.getItem('guru_loggedin');
}
function setLoggedInGuru(email) {
    localStorage.setItem('guru_loggedin', email);
}
function logoutGuru() {
    localStorage.removeItem('guru_loggedin');
    location.reload();
}

function showLoginModal() {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
}
function showRegisterModal() {
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    if (loginModal) loginModal.hide();
    const modal = new bootstrap.Modal(document.getElementById('registerModal'));
    modal.show();
}

function registerGuru() {
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;
    const subject = document.getElementById('registerSubject').value;
    if (!name || !email || !password || !subject) {
        showAlert('Semua field wajib diisi!', 'warning');
        return;
    }
    let users = getGuruUsers();
    if (users.find(u => u.email === email)) {
        showAlert('Email sudah terdaftar!', 'danger');
        return;
    }
    users.push({ name, email, password, subject });
    setGuruUsers(users);
    // Simpan profil awal
    localStorage.setItem(`guru_${email}_profile`, JSON.stringify({
        name,
        nip: '',
        email,
        phone: '',
        subject
    }));
    showAlert('Registrasi berhasil! Silakan login.', 'success');
    const modal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
    modal.hide();
    showLoginModal();
}

function loginGuru() {
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;
    let users = getGuruUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        showAlert('Email atau password salah!', 'danger');
        return;
    }
    setLoggedInGuru(email);
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
    location.reload();
}

// ======== DATA PER GURU ========
function getGuruKey(key) {
    const email = getLoggedInGuru();
    return email ? `guru_${email}_${key}` : null;
}

// Override load/save profile
function loadTeacherProfile() {
    const email = getLoggedInGuru();
    if (!email) {
        // Jika tidak ada guru yang login, set profil ke default/kosong
        teacherProfile = {
            name: "Nama Guru", // Placeholder
            nip: "",
            email: "",
            phone: "",
            subject: ""
        };
    } else {
        const key = `guru_${email}_profile`;
        const savedProfile = localStorage.getItem(key);
        if (savedProfile) {
            teacherProfile = JSON.parse(savedProfile);
        } else {
            // Jika belum ada profil tersimpan untuk guru ini (misal: baru register)
            // Ambil data dari registrasi dan buat profil dasar
            const users = getGuruUsers();
            const currentUser = users.find(u => u.email === email);
            if (currentUser) {
                teacherProfile = {
                    name: currentUser.name,
                    nip: "", // NIP dan phone kosong saat registrasi
                    email: currentUser.email,
                    phone: "",
                    subject: currentUser.subject
                };
                // Simpan profil dasar ini ke localStorage
                localStorage.setItem(key, JSON.stringify(teacherProfile));
            }
        }
    }

    // Update display based on current teacherProfile
    document.querySelector('.profile-name').textContent = teacherProfile.name || '-';
    document.querySelector('.profile-info .info-item:nth-child(1) span').textContent = `NIP: ${teacherProfile.nip || '-'}`;
    document.querySelector('.profile-info .info-item:nth-child(2) span').textContent = teacherProfile.email || '-';
    document.querySelector('.profile-info .info-item:nth-child(3) span').textContent = teacherProfile.phone || '-';
    document.querySelector('.profile-info .info-item:nth-child(4) span').textContent = `Mata Pelajaran: ${teacherProfile.subject || '-'}`;
}

function saveProfile() {
    // ... (kode yang sudah ada untuk ambil data dari form)
    teacherProfile = {
        name: document.getElementById('teacherName').value,
        nip: document.getElementById('teacherNIP').value,
        email: document.getElementById('teacherEmail').value,
        phone: document.getElementById('teacherPhone').value,
        subject: document.getElementById('teacherSubject').value
    };
    
    const email = getLoggedInGuru(); // Ambil email guru yang sedang login
    if (email) {
        localStorage.setItem(`guru_${email}_profile`, JSON.stringify(teacherProfile));
    }
    loadTeacherProfile();
    const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
    modal.hide();
    showAlert('Profil berhasil diperbarui!', 'success');
}

// Override load/save students
function saveStudentsData() {
    const email = getLoggedInGuru(); // Ambil email guru yang sedang login
    if (email) {
        localStorage.setItem(`guru_${email}_students`, JSON.stringify(students));
    }
}
function loadStudentsData() {
    const email = getLoggedInGuru(); // Ambil email guru yang sedang login
    if (!email) return; // Jika tidak ada guru yang login, jangan load data
    const key = `guru_${email}_students`;
    const savedStudents = localStorage.getItem(key);
    if (savedStudents) {
        try {
            const parsed = JSON.parse(savedStudents);
            let valid = true;
            for (let i = 1; i <= 6; i++) {
                if (!Array.isArray(parsed[i.toString()])) valid = false;
            }
            if (valid) {
                students = parsed;
            }
        } catch (e) {
            // Jika error parsing, abaikan dan pakai default (students default)
            // students = students; // Ini sudah diinisialisasi di awal file
        }
    }
}

// Override load/save materials
function saveMaterialsData() {
    const email = getLoggedInGuru(); // Ambil email guru yang sedang login
    if (email) {
        localStorage.setItem(`guru_${email}_materials`, JSON.stringify(materials));
    }
}
function loadMaterialsData() {
    const email = getLoggedInGuru(); // Ambil email guru yang sedang login
    if (!email) return; // Jika tidak ada guru yang login, jangan load data
    const key = `guru_${email}_materials`;
    const savedMaterials = localStorage.getItem(key);
    if (savedMaterials) {
        try {
            const parsed = JSON.parse(savedMaterials);
            if (typeof parsed === 'object' && parsed !== null) {
                materials = parsed;
            }
        } catch (e) {}
    }
}

// ======== INIT & UI ========
function showMainApp(show) {
    document.querySelector('.main-container').style.display = show ? '' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Cek login
    if (!getLoggedInGuru()) {
        showMainApp(false);
        showLoginModal();
        return;
    } else {
        showMainApp(true);
    }
    setCurrentDate();
    loadStudentsData();
    checkAndResetAttendance();
    initializeClassSelector();
    loadMaterialsData();
    loadAttendanceTable();
    loadMaterials();
    loadAnnouncements();
    loadTeacherProfile();
    setInterval(checkAndResetAttendance, 60000);
    
    // Navigation event listeners (re-added)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search and filter functionality (re-added)
    document.getElementById('materialSearch').addEventListener('input', filterMaterials);
    document.getElementById('subjectFilter').addEventListener('change', filterMaterials);
    document.getElementById('classFilter').addEventListener('change', filterMaterials); // Pastikan ini juga ada
    initializeFilters(); // Ini mungkin tidak perlu jika sudah ada event listener di atasnya, tapi biar aman.
});

// Tambahkan tombol logout di navbar
function addLogoutButton() {
    const nav = document.querySelector('.navbar-nav');
    if (!nav.querySelector('.nav-item-logout')) {
        const li = document.createElement('li');
        li.className = 'nav-item nav-item-logout';
        li.innerHTML = '<a class="nav-link text-danger" href="#" onclick="logoutGuru()"><i class="fas fa-sign-out-alt me-1"></i>Logout</a>';
        nav.appendChild(li);
    }
}
document.addEventListener('DOMContentLoaded', addLogoutButton);

// Set current date
function setCurrentDate() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('currentDate').textContent = today.toLocaleDateString('id-ID', options);
}

// Show section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById(sectionName).style.display = 'block';
    document.getElementById(sectionName).classList.add('fade-in');
}

// Initialize class selector
function initializeClassSelector() {
    const classSelector = document.getElementById('classSelector');
    if (classSelector) {
        classSelector.addEventListener('change', function() {
            loadAttendanceTable();
        });
    }
}

// Check and reset attendance if it's a new day
function checkAndResetAttendance() {
    const today = new Date().toISOString().split('T')[0];
    const email = getLoggedInGuru();
    if (!email) return; // Jangan reset jika tidak ada guru yang login

    const lastRefreshKey = `guru_${email}_lastAttendanceRefresh`;
    const lastRefresh = localStorage.getItem(lastRefreshKey);
    
    if (lastRefresh !== today) {
        // Reset all students' attendance status to 'non' for the current teacher
        Object.keys(students).forEach(classNum => {
            students[classNum].forEach(student => {
                student.status = 'non';
                student.note = '';
            });
        });
        
        // Save the reset data for the current teacher
        saveStudentsData(); // Akan menggunakan key per guru
        localStorage.setItem(lastRefreshKey, today);
        
        // If a class is currently selected, reload the attendance table
        const selectedClass = document.getElementById('classSelector').value;
        if (selectedClass) {
            loadAttendanceTable();
        }
        
        // Show notification
        showAlert('Absensi telah direset untuk hari ini', 'info');
    }
}

// Load attendance table
function loadAttendanceTable() {
    const tbody = document.getElementById('attendanceTableBody');
    const selectedClass = document.getElementById('classSelector').value;
    tbody.innerHTML = '';
    
    if (!selectedClass) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">Pilih kelas terlebih dahulu</td></tr>';
        return;
    }
    
    const classStudents = students[selectedClass] || [];
    
    classStudents.forEach((student, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${student.name}</strong></td>
                <td>${student.nis}</td>
                <td>
                    <select class="form-control form-control-sm" onchange="updateAttendance(${student.id}, this.value, '${selectedClass}')">
                        <option value="non" ${student.status === 'non' ? 'selected' : ''}>Belum Diabsen</option>
                        <option value="hadir" ${student.status === 'hadir' ? 'selected' : ''}>Hadir</option>
                        <option value="tidak-hadir" ${student.status === 'tidak-hadir' ? 'selected' : ''}>Tidak Hadir</option>
                        <option value="izin" ${student.status === 'izin' ? 'selected' : ''}>Izin</option>
                    </select>
                </td>
                <td>
                    <input type="text" class="form-control form-control-sm" 
                           value="${student.note}" 
                           onchange="updateNote(${student.id}, this.value, '${selectedClass}')"
                           placeholder="Keterangan..."
                           ${student.status === 'non' ? 'disabled' : ''}>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    
    updateStats(selectedClass);
}

// Update attendance status
function updateAttendance(studentId, status, classLevel) {
    const student = students[classLevel].find(s => s.id === studentId);
    if (student) {
        student.status = status;
        // Clear note if status is 'non'
        if (status === 'non') {
            student.note = '';
        }
        updateStats(classLevel);
        // Save changes to localStorage
        saveStudentsData();
        // Reload table to update note field state
        loadAttendanceTable();
    }
}

// Update student note
function updateNote(studentId, note, classLevel) {
    const student = students[classLevel].find(s => s.id === studentId);
    if (student) {
        student.note = note;
        // Save changes to localStorage
        saveStudentsData();
    }
}

// Update statistics
function updateStats(classLevel) {
    const classStudents = students[classLevel] || [];
    const totalStudents = classStudents.length;
    const presentStudents = classStudents.filter(s => s.status === 'hadir').length;
    const notMarkedStudents = classStudents.filter(s => s.status === 'non').length;
    
    document.getElementById('totalStudents').textContent = totalStudents;
    document.getElementById('presentToday').textContent = presentStudents;
    document.getElementById('totalMaterials').textContent = Object.values(materials).flat().length;
    
    // Update the present students display to show not marked count
    const presentElement = document.getElementById('presentToday');
    if (notMarkedStudents > 0) {
        presentElement.innerHTML = `${presentStudents} <small class="text-muted">(${notMarkedStudents} belum diabsen)</small>`;
    } else {
        presentElement.textContent = presentStudents;
    }
}

// Save attendance
function saveAttendance() {
    const selectedClass = document.getElementById('classSelector').value;
    if (!selectedClass) {
        showAlert('Pilih kelas terlebih dahulu!', 'warning');
        return;
    }
    
    // Check if there are any unmarked students
    const unmarkedStudents = students[selectedClass].filter(s => s.status === 'non');
    if (unmarkedStudents.length > 0) {
        showAlert(`Masih ada ${unmarkedStudents.length} siswa yang belum diabsen!`, 'warning');
        return;
    }
    
    // Prepare data for Excel
    const attendanceData = students[selectedClass].map(student => ({
        'No': student.id,
        'Nama Siswa': student.name,
        'NIS': student.nis,
        'Status Kehadiran': getStatusText(student.status),
        'Keterangan': student.note,
        'Kelas': `Kelas ${student.class}`,
        'Tanggal': formatDate(new Date().toISOString().split('T')[0])
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(attendanceData);

    // Set column widths
    const wscols = [
        {wch: 5},  // No
        {wch: 20}, // Nama Siswa
        {wch: 10}, // NIS
        {wch: 15}, // Status Kehadiran
        {wch: 25}, // Keterangan
        {wch: 10}, // Kelas
        {wch: 15}  // Tanggal
    ];
    ws['!cols'] = wscols;

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Absensi");

    // Generate filename with date and class
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `Absensi_Kelas_${selectedClass}_${currentDate}.xlsx`;

    // Save file
    XLSX.writeFile(wb, filename);
    
    // Show success message
    showAlert('Absensi berhasil disimpan ke file Excel!', 'success');
}

// Helper function to get status text
function getStatusText(status) {
    const statusMap = {
        'hadir': 'Hadir',
        'tidak-hadir': 'Tidak Hadir',
        'izin': 'Izin',
        'non': 'Belum Diabsen'
    };
    return statusMap[status] || status;
}

// Load materials
function loadMaterials() {
    const container = document.getElementById('materialsContainer');
    container.innerHTML = '';
    
    // Get selected subject from filter
    const selectedSubject = document.getElementById('subjectFilter').value;
    const selectedClass = document.getElementById('classFilter').value;
    
    // Create subject sections
    Object.entries(materials).forEach(([subject, subjectMaterials]) => {
        // Skip if subject filter is active and doesn't match
        if (selectedSubject && selectedSubject !== subject) return;
        
        // Filter materials by class if class filter is active
        const filteredMaterials = selectedClass 
            ? subjectMaterials.filter(material => material.class === selectedClass)
            : subjectMaterials;
        
        // Skip if no materials after filtering
        if (filteredMaterials.length === 0) return;
        
        // Create subject section
        const subjectSection = document.createElement('div');
        subjectSection.className = 'subject-section mb-4';
        subjectSection.innerHTML = `
            <div class="subject-header mb-3">
                <h3 class="subject-title">
                    <i class="fas ${getSubjectIcon(subject)} me-2"></i>
                    ${subject}
                </h3>
                <div class="subject-stats">
                    <span class="badge bg-primary">${filteredMaterials.length} Materi</span>
                </div>
            </div>
            <div class="subject-materials">
                ${filteredMaterials.map(material => createMaterialCard(material)).join('')}
            </div>
        `;
        container.appendChild(subjectSection);
    });
}

// Create material card HTML
function createMaterialCard(material) {
    return `
        <div class="material-card" data-subject="${material.subject}" data-class="${material.class}">
            <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                    <h5 class="mb-1">${material.title}</h5>
                    <div class="d-flex align-items-center text-muted mb-2">
                        <span class="badge bg-secondary me-2">Kelas ${material.class}</span>
                        <small><i class="fas fa-calendar me-1"></i>${formatDate(material.date)}</small>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onclick="editMaterial(${material.id})"><i class="fas fa-edit me-2"></i>Edit</a></li>
                        <li><a class="dropdown-item text-danger" href="#" onclick="deleteMaterial(${material.id})"><i class="fas fa-trash me-2"></i>Hapus</a></li>
                    </ul>
                </div>
            </div>
            <p class="text-muted mb-3">${material.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                ${material.link ? `<a href="${material.link}" class="btn btn-outline-primary btn-sm" target="_blank"><i class="fas fa-external-link-alt me-1"></i>Buka Materi</a>` : '<span class="text-muted">Tidak ada link</span>'}
                <small class="text-muted">ID: ${material.id}</small>
            </div>
        </div>
    `;
}

// Get subject icon
function getSubjectIcon(subject) {
    const icons = {
        'Matematika': 'fa-calculator',
        'Bahasa Indonesia': 'fa-book',
        'IPA': 'fa-flask',
        'IPS': 'fa-globe-asia',
        'PKN': 'fa-landmark'
    };
    return icons[subject] || 'fa-book';
}

// Filter materials
function filterMaterials() {
    const searchTerm = document.getElementById('materialSearch').value.toLowerCase();
    const subjectFilter = document.getElementById('subjectFilter').value;
    const classFilter = document.getElementById('classFilter').value;
    const materialCards = document.querySelectorAll('.material-card');
    
    materialCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const subject = card.getAttribute('data-subject');
        const classLevel = card.getAttribute('data-class');
        
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesSubject = !subjectFilter || subject === subjectFilter;
        const matchesClass = !classFilter || classLevel === classFilter;
        
        if (matchesSearch && matchesSubject && matchesClass) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add new material
function addMaterial() {
    const subject = document.getElementById('materialSubject').value;
    const classLevel = document.getElementById('materialClass').value;
    const title = document.getElementById('materialTitle').value;
    const description = document.getElementById('materialDescription').value;
    const link = document.getElementById('materialLink').value;
    
    if (!subject || !classLevel || !title || !description) {
        showAlert('Mohon lengkapi semua field yang wajib diisi!', 'warning');
        return;
    }
    
    const newMaterial = {
        id: Object.values(materials).flat().length + 1,
        subject: subject,
        class: classLevel,
        title: title,
        description: description,
        link: link,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Add to materials object
    if (!materials[subject]) {
        materials[subject] = [];
    }
    materials[subject].push(newMaterial);
    saveMaterialsData(); // Simpan ke localStorage
    
    loadMaterials();
    updateStats();
    
    // Reset form and close modal
    document.getElementById('addMaterialForm').reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('addMaterialModal'));
    modal.hide();
    
    showAlert('Materi berhasil ditambahkan!', 'success');
}

// Edit material
function editMaterial(materialId) {
    // Temukan materi berdasarkan ID
    let found = null, subjectKey = null, idx = -1;
    Object.entries(materials).forEach(([subject, arr]) => {
        arr.forEach((mat, i) => {
            if (mat.id === materialId) {
                found = mat;
                subjectKey = subject;
                idx = i;
            }
        });
    });
    if (!found) {
        showAlert('Materi tidak ditemukan!', 'danger');
        return;
    }
    // Isi form edit
    document.getElementById('editMaterialId').value = found.id;
    document.getElementById('editMaterialSubject').value = found.subject;
    document.getElementById('editMaterialClass').value = found.class;
    document.getElementById('editMaterialTitle').value = found.title;
    document.getElementById('editMaterialDescription').value = found.description;
    document.getElementById('editMaterialLink').value = found.link;
    // Tampilkan modal
    const modal = new bootstrap.Modal(document.getElementById('editMaterialModal'));
    modal.show();
}

// Simpan perubahan edit materi
function saveEditMaterial() {
    const id = parseInt(document.getElementById('editMaterialId').value);
    const subject = document.getElementById('editMaterialSubject').value;
    const classLevel = document.getElementById('editMaterialClass').value;
    const title = document.getElementById('editMaterialTitle').value;
    const description = document.getElementById('editMaterialDescription').value;
    const link = document.getElementById('editMaterialLink').value;
    if (!subject || !classLevel || !title || !description) {
        showAlert('Mohon lengkapi semua field yang wajib diisi!', 'warning');
        return;
    }
    // Temukan dan update materi
    let oldSubject = null, idx = -1;
    Object.entries(materials).forEach(([subj, arr]) => {
        arr.forEach((mat, i) => {
            if (mat.id === id) {
                oldSubject = subj;
                idx = i;
            }
        });
    });
    if (oldSubject === null || idx === -1) {
        showAlert('Materi tidak ditemukan!', 'danger');
        return;
    }
    // Jika subject berubah, pindahkan ke subject baru
    if (oldSubject !== subject) {
        // Hapus dari subject lama
        const materialData = materials[oldSubject][idx];
        materials[oldSubject].splice(idx, 1);
        // Tambahkan ke subject baru
        if (!materials[subject]) materials[subject] = [];
        materials[subject].push({
            ...materialData,
            subject,
            class: classLevel,
            title,
            description,
            link
        });
    } else {
        // Update di subject yang sama
        materials[subject][idx] = {
            ...materials[subject][idx],
            subject,
            class: classLevel,
            title,
            description,
            link
        };
    }
    saveMaterialsData(); // Simpan ke localStorage
    // Tutup modal dan refresh tampilan
    const modal = bootstrap.Modal.getInstance(document.getElementById('editMaterialModal'));
    modal.hide();
    loadMaterials();
    updateStats();
    showAlert('Materi berhasil diperbarui!', 'success');
}

// Delete material
function deleteMaterial(materialId) {
    if (confirm('Apakah Anda yakin ingin menghapus materi ini?')) {
        // Find and remove material from the correct subject array
        Object.keys(materials).forEach(subject => {
            materials[subject] = materials[subject].filter(m => m.id !== materialId);
        });
        saveMaterialsData(); // Simpan ke localStorage
        loadMaterials();
        updateStats();
        showAlert('Materi berhasil dihapus!', 'success');
    }
}

// Show alert message
function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Add to document
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 5000);
}

// Mobile responsive navigation
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        // Mobile specific adjustments
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.marginBottom = '1.5rem';
        });
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S to save attendance
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (document.getElementById('attendance').style.display !== 'none') {
            saveAttendance();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});

// Print functionality (bonus feature)
function printAttendance() {
    const printWindow = window.open('', '', 'height=600,width=800');
    const attendanceTable = document.querySelector('#attendance .table').outerHTML;
    const currentDate = document.getElementById('currentDate').textContent;
    
    // Ambil nama sekolah dari navbar-brand
    const schoolName = document.querySelector('.navbar-brand').textContent.trim();

    printWindow.document.write(`
        <html>
            <head>
                <title>Absensi Siswa - ${currentDate}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h2>${schoolName}</h2>
                    <h3>Daftar Absensi Siswa</h3>
                    <p>Tanggal: ${currentDate}</p>
                </div>
                ${attendanceTable}
            </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Initialize tooltips (Bootstrap feature)
document.addEventListener('DOMContentLoaded', function() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Initialize filters
function initializeFilters() {
    const subjectFilter = document.getElementById('subjectFilter');
    const classFilter = document.getElementById('classFilter');
    
    if (subjectFilter) {
        subjectFilter.addEventListener('change', filterMaterials);
    }
    
    if (classFilter) {
        classFilter.addEventListener('change', filterMaterials);
    }
}

// Download template for student data
function downloadTemplate() {
    // Create template data
    const templateData = [
        ['NIS', 'Nama Siswa', 'Kelas'],
        ['001', 'Contoh Siswa', '1']
    ];

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(templateData);

    // Set column widths
    const wscols = [
        {wch: 10}, // NIS
        {wch: 30}, // Nama Siswa
        {wch: 10}  // Kelas
    ];
    ws['!cols'] = wscols;

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template Siswa");

    // Save file
    XLSX.writeFile(wb, "Template_Data_Siswa.xlsx");
}

// Import students from Excel file
function importStudents() {
    const fileInput = document.getElementById('studentFile');
    const file = fileInput.files[0];
    
    if (!file) {
        showAlert('Pilih file Excel terlebih dahulu!', 'warning');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);

            // Validate data
            if (jsonData.length === 0) {
                showAlert('File Excel tidak mengandung data!', 'warning');
                return;
            }

            // Process and validate each row
            const newStudents = {};
            let hasError = false;
            let errorMessage = '';

            jsonData.forEach((row, index) => {
                // Validate required fields
                if (!row['NIS'] || !row['Nama Siswa'] || !row['Kelas']) {
                    hasError = true;
                    errorMessage = `Baris ${index + 2}: Semua kolom harus diisi`;
                    return;
                }

                // Validate class number
                const classNum = row['Kelas'].toString();
                if (!['1', '2', '3', '4', '5', '6'].includes(classNum)) {
                    hasError = true;
                    errorMessage = `Baris ${index + 2}: Kelas harus antara 1-6`;
                    return;
                }

                // Initialize class array if not exists
                if (!newStudents[classNum]) {
                    newStudents[classNum] = [];
                }

                // Add student to appropriate class
                newStudents[classNum].push({
                    id: newStudents[classNum].length + 1,
                    name: row['Nama Siswa'],
                    nis: row['NIS'].toString(),
                    status: 'non',
                    note: '',
                    class: classNum
                });
            });

            if (hasError) {
                showAlert(errorMessage, 'warning');
                return;
            }

            // Update students data
            Object.keys(newStudents).forEach(classNum => {
                students[classNum] = newStudents[classNum];
            });

            // Close modal and reset form
            const modal = bootstrap.Modal.getInstance(document.getElementById('importStudentsModal'));
            modal.hide();
            document.getElementById('importStudentsForm').reset();

            // Reload attendance table if a class is selected
            const selectedClass = document.getElementById('classSelector').value;
            if (selectedClass) {
                loadAttendanceTable();
            }

            showAlert('Data siswa berhasil diimport!', 'success');
        } catch (error) {
            console.error('Error importing file:', error);
            showAlert('Terjadi kesalahan saat memproses file Excel!', 'danger');
        }
    };

    reader.onerror = function() {
        showAlert('Terjadi kesalahan saat membaca file!', 'danger');
    };

    reader.readAsArrayBuffer(file);
}

// Edit profile
function editProfile() {
    // Ambil data profil dari localStorage sesuai guru login
    const key = getGuruKey('profile');
    let profile = teacherProfile;
    if (key) {
        const savedProfile = localStorage.getItem(key);
        if (savedProfile) {
            profile = JSON.parse(savedProfile);
        }
    }
    document.getElementById('teacherName').value = profile.name || '';
    document.getElementById('teacherNIP').value = profile.nip || '';
    document.getElementById('teacherEmail').value = profile.email || '';
    document.getElementById('teacherPhone').value = profile.phone || '';
    document.getElementById('teacherSubject').value = profile.subject || '';
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
    modal.show();
}
