/**
 * ==========================================================================
 * CENTRALIZED GLOBAL DATA MANAGEMENT STORE (Object Matrix Configuration)
 * Sửa đổi dữ liệu tại đây để đồng bộ thông tin trên toàn bộ Website
 * ==========================================================================
 */
const portfolioData = {
    // Thông tin 
    name: "Nguyễn Đức Phú",
    studentId: "25022976", 
    class: "VNU1001_E252002", 
    subject: "Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo",
    major: "Trí tuệ nhân tạo",
    university: "Đại học Công nghệ - Đại học Quốc gia Hà Nội",   
    hobbies: "Lập trình thi đấu, chơi Valorant, cầu lông.",
    avatarUrl: "https://lh3.googleusercontent.com/d/12TvGpuB6UT5Iga8P7UJMxBYOPSCUGIFn",

    // Mục tiêu học tập và Định hướng phát triển cá nhân dài hạn (Cập nhật chuẩn Ảnh 1)
    goals: [
        { icon: "fa-code", text: "Hiểu sâu và làm chủ công nghệ." },
        { icon: "fa-brain", text: "Xây dựng các hệ thống và mô hình học máy ứng dụng vào giải quyết vấn đề thực tế." },
        { icon: "fa-arrow-up-right-from-square", text: "Định hướng phát triển cá nhân: Nghiên cứu mô hình ngôn ngữ lớn như ChatPGT, Claude,..." }
    ],

    // Hệ thống mục tiêu chiến lược của việc thiết lập Portfolio này (Cập nhật chuẩn Ảnh 1)
    portfolioGoals: [
        { title: "Đánh giá lại năng lực số của bản thân", text: "Trang web thể hiện một cách trực quan các kỹ năng mình đã tích lũy: từ quản lý tệp tin, tối ưu câu lệnh Prompt, kỹ năng làm việc nhóm hiệu quả." },
        { title: "Kết nối và chia sẻ sản phẩm", text: "Là không gian lưu trữ bài tập xuyên suốt môn học, giúp mình dễ dàng gửi bài làm mọi lúc mọi nơi." }
    ],

    // Nội dung chi tiết các Nhiệm vụ (Đã chắt lọc phần quan trọng nhất từ PDF)
    tasks: {
        task1: {
            title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
            desc: "Thực hành quản trị tệp tin hệ thống trên môi trường Windows File Explorer cục bộ tại phân vùng ổ đĩa D.",
            driveUrl: "https://drive.google.com/file/d/1eVcx7SYphvsgsaUAw3c5cDZKF71_DXrJ/view?usp=sharing",
            structure: `ThucHanh_NguyenDucPhu/ (Ngày 07/03/2026)
├── GhiChuQuanTrong.txt   # File nhật ký ghi chú hệ thống
└── TaiLieu/             # Thư mục con lưu trữ học liệu phân cấp
    ├── GhiChuQuanTrong.txt   # Bản sao tệp tin văn bản (Copy & Paste)
    └── DiChuyen.txt          # Tệp văn bản dịch chuyển hệ thống (Cut & Paste)`,
            learning: "Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành máy tính."
        },
        task2: {
            title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
            desc: "Nghiên cứu về chủ đề: Các phương pháp Explainable AI (XAI) trong mô hình Học sâu: Cân bằng giữa độ chính xác và tính minh bạch.",
            driveUrl: "https://drive.google.com/file/d/1tB4DkympIuCJvwXhnI-l5yhAjx5I8uxu/view?usp=sharing",
            scope: "Thiết lập không gian tìm kiếm từ năm 2016 đến nay trên các nền tảng cơ sở dữ liệu khoa học lớn như Google Scholar, IEEE Xplore, ScienceDirect và hệ thống tạp chí uy tín (Nature, NeurIPS, KDD).",
            analysis: "Đánh giá ưu/nhược điểm các tài liệu: Phương pháp SHAP của Lundberg & Lee (2017) (trích dẫn trên 20,000+); Mô hình LIME của Ribeiro (2016) (trích dẫn trên 30,000+). Rút trích hệ thống phân loại toàn diện từ Arrieta (2020) và định hướng tầm nhìn chiến lược quốc phòng từ DARPA qua bài báo của Gunning (2019)."
        },
        task3: {
            title: "Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập",
            desc: "Ứng dụng khuôn xây dựng cấu trúc câu lệnh thông minh tương tác với các mô hình ngôn ngữ lớn nhằm giải quyết triệt để 3 tác vụ phức tạp.",
            driveUrl: "https://drive.google.com/file/d/1MmUXHv00dZWUoqvnCxVmrv8rwmJsWV5X/view?usp=sharing",
            promptOld: "Viết mã Python giải toán sắp xếp; Giải thích vướng víu lượng tử; Tạo câu hỏi ôn tập.",
            resultOld: "Kết quả trả về chung chung, khô khan mang tính định nghĩa lý thuyết, bộ câu hỏi quá dễ đoán không kích thích tư duy.",
            promptNew: "Áp dụng prompt vai trò chuyên gia, định dạng và kỹ thuật lập luận Chain-of-Thought từng bước (Lấy ví dụ -> Giải thích cơ chế -> Nêu ứng dụng thực tế).",
            resultNew: "Phản hồi xuất sắc và giải thích chi tiết bám sát trọng tâm và mục đích câu hỏi, mã nguồn tối ưu.",
            formula: "Prompt chuẩn C.R.E.A: C - Context (Bối cảnh), R - Request (Yêu cầu), E - Examples (Ví dụ mẫu), A - Architecture (Cấu trúc đầu ra)."
        },
        task4: {
            title: "Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
            desc: "Trưởng nhóm điều phối Nhóm 16 gồm 5 thành viên thực hiện bài tập nhóm quay video thời lượng 6 phút với chủ đề 'Ứng dụng AI trong Khoa học Tự nhiên và Kỹ thuật'.",
            driveUrl: "https://drive.google.com/file/d/12elc87ouRVuRSjmuYHkjw5dla1tk4RW0/view?usp=sharing",
            framework: "Thiết lập hệ sinh thái làm việc nhóm qua 4 nền tảng: Trello, Google Docs, Google Drive, và Zalo.",
            solutions: "Giải quyết các vấn đề cốt lõi khi làm việc nhóm: (1) Chống trôi tin nhắn; (2) Ngăn ngừa lỗi xóa nhầm kịch bản chung."
        },
        task5: {
            title: "Bài 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
            desc: "Xây dựng nội dung truyền thông hướng đến đối tượng dân văn phòng nhằm cung cấp các mẹo bảo vệ môi trường, giảm thiểu rác thải nhựa.",
            driveUrl: "https://drive.google.com/file/d/1qCKPAy8jlS3hD3_A3t2AkFtcwGWwx245/view?usp=sharing",
            workflow: "Vận hành quy trình sáng tạo tự động qua 3 công cụ AI: (1) Google Gemini; (2) DALL-E 3; (3) Canva AI.",
            critique: "Đánh giá: Gemini viết văn phong tự nhiên nhưng dễ bị sáo rỗng; DALL-E 3 phối màu xuất sắc nhưng không tự tạo được chữ chính xác; Canva AI nhanh gọn nhưng gợi ý không đa dạng."
        },
        task6: {
            title: "Bài 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
            desc: "Phân tích chính sách Liêm chính học thuật liên quan đến Trí tuệ nhân tạo của các trường đại học tại Việt Nam.",
            framework: "Nghiên cứu ranh giới đạo đức: Ủng hộ dùng AI làm gia sư hỗ trợ tìm ý tưởng, lập dàn bài hoặc soát lỗi chính tả; Nghiêm cấm hành vi sao chép nguyên bản kết quả sinh ra từ AI.",
            driveUrl: "https://drive.google.com/file/d/1yzkgNF0n1BciyItxHugvEB8TcxeZDImR/view?usp=sharing",
            principles: "Bộ quy tắc 6 điểm liêm chính: 1. Tư duy là của mình; 2. Khai báo trung thực công đoạn có AI can thiệp; 3. Kiểm tra chéo thông tin với tài liệu chính thống; 4. Tôn trọng bản quyền; 5. Bảo mật dữ liệu học thuật; 6. Trau dồi bản thân liên tục."
        }
    },

    // Dữ liệu Tổng kết chiến dịch học tập
    summary: {
        skills: [
            { name: "Kỹ năng quản lý tệp & thư mục", percent: 95 },
            { name: "Kỹ năng viết Prompt", percent: 90 },
            { name: "Tham gia dự án nhóm", percent: 85 },
            { name: "Tư duy phản biện & Đạo đức AI", percent: 90 }
        ],
        // 1. Chia sẻ trải nghiệm và cảm nhận cá nhân về đồ án Portfolio
        experiences: "Quá trình thực hiện dự án Portfolio này là một cơ hội tuyệt vời để mình hệ thống hóa lại toàn bộ kiến thức đã học. Từ việc bỡ ngỡ với các công cụ mới, mình đã dần làm quen và biết cách áp dụng chúng vào thực tế. 'Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo' thực sự đã thay đổi cách mình tiếp cận vấn đề và xử lý thông tin trong thời đại số.",
        // 2. Nêu bật kiến thức và kỹ năng quan trọng nhất đã học được
        skillsHighlighted: "Kỹ năng Prompt Engineering để giao tiếp hiệu quả với AI và khả năng đánh giá độ tin cậy của thông tin học thuật.",
        // 3. Trình bày điểm cảm thấy tâm đắc nhất
        highlights: "Khả năng ứng dụng AI vào sáng tạo nội dung số, giúp tiết kiệm thời gian đáng kể mà vẫn giữ được chất lượng.",
        // 4. Những thách thức gặp phải và cách giải quyết
        challenges: "Việc kết hợp giữa nhiều công cụ trực tuyến trong làm việc nhóm, đặc biệt là Trello.",
        
        roadmap: [
            { year: "Năm 2", plan: "Học kĩ lý thuyết nền tảng về AI." },
            { year: "Năm 3-4", plan: "Thực hiện các dự án nhỏ và làm đồ án tốt nghiệp." },
            { year: "Khi tốt nghiệp", plan: "Phát triển một mô hình ngôn ngữ lớn (LLM) hoàn chỉnh." }
        ]
    }
};

/**
 * ==========================================================================
 * INITIALIZATION ENGINE (DOM Hydration Processing)
 * Vận hành nạp dữ liệu tự động lên giao diện HTML khi trang khởi chạy
 * ==========================================================================
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Hide Loading Mask animation (Giữ nguyên)
    const loader = document.getElementById("loader");
    setTimeout(() => {
        if(loader) loader.style.opacity = "0";
        setTimeout(() => { if(loader) loader.style.display = "none"; }, 500);
    }, 600);

    // 2. Load Core Student Identity Meta Data (Giữ nguyên)
    document.getElementById("hero-name").innerText = portfolioData.name;
    //document.getElementById("hero-id").innerText = portfolioData.studentId;
    document.getElementById("hero-class").innerText = portfolioData.class;
    document.getElementById("hero-img").src = portfolioData.avatarUrl;
    document.getElementById("hero-subject").innerText = portfolioData.subject;


    document.getElementById("about-name").innerText = portfolioData.name;
    document.getElementById("about-id").innerText = portfolioData.studentId;
    document.getElementById("about-major").innerText = portfolioData.major;
    document.getElementById("about-university").innerText = portfolioData.university;
    document.getElementById("about-hobbies").innerText = portfolioData.hobbies;
    document.getElementById("footer-student-name").innerText = portfolioData.name;
    document.getElementById("nav-logo-text").innerText = `${portfolioData.name} | Portfolio`;
    //document.getElementById("hero-goal-summary").innerText = portfolioData.goals[0].text;

    // 3. Render các mục tiêu cá nhân & Định hướng học tập vào trang Giới thiệu (About)
    const goalsContainer = document.getElementById("about-goals");
    goalsContainer.innerHTML = portfolioData.goals.map(g => `
        <div class="goal-item">
            <div class="goal-icon"><i class="fa-solid ${g.icon}"></i></div>
            <p>${g.text}</p>
        </div>
    `).join('');

    // 4. MỚI THÊM: Render mục tiêu thiết lập Portfolio vào trang Giới thiệu
    const portfolioGoalsContainer = document.getElementById("portfolio-goals-container");
    portfolioGoalsContainer.innerHTML = portfolioData.portfolioGoals.map(pg => `
        <div style="background: rgba(0,0,0,0.02); padding: 1.2rem; border-radius: 8px; border-top: 3px solid var(--primary);">
            <h5><strong><i class="fa-solid fa-circle-check" style="color: var(--primary-light);"></i> ${pg.title}</strong></h5>
            <p style="font-size:0.92rem; margin-top:0.4rem; color: var(--text-secondary); line-height:1.6;">${pg.text}</p>
        </div>
    `).join('');

    initTasks();
    // Default Initialize Task Section Render 
    switchTask(1);

    // Render Core Summary Analytics Metrics
    renderSummaryPage();

    // Active Smooth Animation Observer Register 
    registerScrollAnimations();
});

/**
 * ==========================================================================
 * TASK ROUTER VIEW GENERATOR (Dynamic Content Builder Engine)
 * Xử lý tạo cấu trúc HTML động cho từng nhiệm vụ theo chuẩn Rubric Mức 4
 * ==========================================================================
 */
function initTasks() {
    const viewport = document.getElementById("task-viewport");
    let allTasksHTML = "";

    // Vòng lặp tự động dựng cấu trúc HTML cho cả 6 bài tập cùng lúc
    for (let i = 1; i <= 6; i++) {
        const d = portfolioData.tasks[`task${i}`];
        
        const driveComponentHTML = `
            <a href="${d.driveUrl}" target="_blank" class="drive-print-link" style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; background: rgba(16, 185, 129, 0.08); border: 2px dashed var(--primary-light); color: var(--primary); padding: 1.2rem; border-radius: 12px; text-decoration: none; font-weight: 600; margin: 1.5rem 0 0.5rem 0; transition: var(--transition); box-shadow: var(--shadow);" onmouseover="this.style.background='rgba(16, 185, 129, 0.18)'; this.style.transform='translateY(-2px)';" onmouseout="this.style.background='rgba(16, 185, 129, 0.08)'; this.style.transform='translateY(0)';">
                <i class="fa-solid fa-folder-open" style="font-size: 1.5rem; color: var(--primary-light);"></i> 
                Báo cáo chi tiết
            </a>
        `;

        let taskHTML = `<div class="task-content-block" id="task-block-${i}">`;

        if (i === 1) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-folder-tree"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div style="margin-bottom: 1rem;">
                        <h4><i class="fa-solid fa-network-wired"></i> Sơ đồ tổ chức tệp tin hệ thống thực tế:</h4>
                        <pre class="folder-tree" style="margin-top:0.5rem;"><code>${d.structure}</code></pre>
                    </div>
                    <div class="insight-box">
                        <strong><i class="fa-solid fa-lightbulb"></i> Kỹ năng thực hành cốt lõi:</strong>
                        <p>${d.learning}</p>
                    </div>
                    ${driveComponentHTML}
                </div>
            `;
        } 
        else if (i === 2) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-magnifying-glass"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div style="background: rgba(0,0,0,0.02); padding: 1.2rem; border-radius: 8px; border-left: 4px solid var(--primary);">
                        <h4><i class="fa-solid fa-globe"></i> Không gian chiến lược & Cơ sở dữ liệu:</h4>
                        <p style="font-size:0.95rem; margin-top:0.3rem; color: var(--text-secondary);">${d.scope}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <h4><i class="fa-solid fa-graduation-cap"></i> Phân tích và đánh giá chất lượng nguồn tài liệu học thuật:</h4>
                        <p style="font-size:0.95rem; line-height:1.7; margin-top:0.5rem;">${d.analysis}</p>
                    </div>
                    ${driveComponentHTML}
                </div>
            `;
        }
        else if (i === 3) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-terminal"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div class="grid-2" style="gap: 1.5rem;">
                        <div style="background: rgba(220, 38, 38, 0.03); border: 1px solid rgba(220, 38, 38, 0.15); padding: 1.2rem; border-radius: 8px;">
                            <h4 style="color: #b91c1c;"><i class="fa-solid fa-triangle-exclamation"></i> Tiếp cận cơ bản (Chưa tối ưu)</h4>
                            <p style="margin-top: 0.5rem; font-size:0.9rem;"><strong>Mẫu câu lệnh:</strong> <code>"${d.promptOld}"</code></p>
                            <p style="margin-top: 0.5rem; font-size:0.9rem; color: var(--text-secondary);"><strong>Hạn chế phản hồi:</strong> ${d.resultOld}</p>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.04); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: 8px;">
                            <h4 style="color: var(--primary);"><i class="fa-solid fa-circle-check"></i> Kỹ nghệ cải tiến chuyên sâu</h4>
                            <p style="margin-top: 0.5rem; font-size:0.9rem;"><strong>Chiến lược nâng cao:</strong> ${d.promptNew}</p>
                            <p style="margin-top: 0.5rem; font-size:0.9rem; color: var(--text-primary);"><strong>Hiệu năng thực tiễn:</strong> ${d.resultNew}</p>
                        </div>
                    </div>
                    <div class="insight-box" style="margin-top:1rem;">
                        <strong><i class="fa-solid fa-gears"></i> Nguyên lý đúc kết nền tảng cấu trúc:</strong>
                        <p>${d.formula}</p>
                    </div>
                    ${driveComponentHTML}
                </div>
            `;
        }
        else if (i === 4) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-users"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div style="background: rgba(0,0,0,0.02); padding: 1.2rem; border-radius: 8px; border-top: 3px solid var(--primary);">
                        <h4><i class="fa-solid fa-sitemap"></i> Khung mô hình tổ chức và điều phối không gian số:</h4>
                        <p style="font-size:0.95rem; margin-top:0.4rem; color: var(--text-secondary);">${d.framework}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <h4><i class="fa-solid fa-kit-medical"></i> Quản trị rủi ro & Giải pháp giải quyết thách thức nội bộ:</h4>
                        <p style="font-size:0.95rem; line-height:1.7; margin-top:0.5rem;">${d.solutions}</p>
                    </div>
                    ${driveComponentHTML}
                </div>
            `;
        }
        else if (i === 5) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-wand-magic-sparkles"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div style="background: rgba(0,0,0,0.02); padding: 1.2rem; border-radius: 8px; border-left: 4px solid var(--primary-light);">
                        <h4><i class="fa-solid fa-bezier-curve"></i> Nhật ký vận hành và quy trình xử lý dữ liệu:</h4>
                        <p style="font-size:0.95rem; margin-top:0.4rem; color: var(--text-primary);">${d.workflow}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <h4><i class="fa-solid fa-chart-pie"></i> Đánh giá phản biện ưu điểm và giới hạn kỹ thuật của các mô hình:</h4>
                        <p style="font-size:0.95rem; line-height:1.7; margin-top:0.5rem; color: var(--text-secondary);">${d.critique}</p>
                    </div>
                    ${driveComponentHTML}
                </div>
            `;
        }
        else if (i === 6) {
            taskHTML += `
                <div class="task-container-layout card glass-card">
                    <h3><i class="fa-solid fa-scale-balanced"></i> ${d.title}</h3>
                    <p class="description">${d.desc}</p>
                    <div style="background: rgba(0,0,0,0.02); padding: 1.2rem; border-radius: 8px; margin-bottom: 1rem;">
                        <h4><i class="fa-solid fa-graduation-cap"></i> Khảo sát chính sách học đường & Thực nghiệm ảo giác AI:</h4>
                        <p style="font-size:0.95rem; margin-top:0.4rem; color: var(--text-secondary);">${d.framework}</p>
                    </div>
                    <h4><i class="fa-solid fa-shield-halved"></i> Hệ thống hành vi - Bộ quy tắc liêm chính học thuật cá nhân:</h4>
                    <p style="font-size:0.95rem; line-height:1.7; margin-top:0.5rem;">${d.principles}</p>
                    ${driveComponentHTML}
                </div>
            `;
        }
        taskHTML += `</div>`;
        allTasksHTML += taskHTML;
    }
    viewport.innerHTML = allTasksHTML;
}

/**
 * ==========================================================================
 * TASK ROUTER VIEW GENERATOR (Điều khiển bật/tắt class hiển thị trên màn hình)
 * ==========================================================================
 */
function switchTask(taskNumber) {
    // Cập nhật trạng thái active của các nút tab bấm điều hướng
    const buttons = document.querySelectorAll(".task-tab-btn");
    buttons.forEach((btn, idx) => {
        if (idx === (taskNumber - 1)) btn.classList.add("active");
        else btn.classList.remove("active");
    });

    // Ẩn toàn bộ các khối bài tập và chỉ hiển thị khối được chọn kèm hiệu ứng
    const blocks = document.querySelectorAll(".task-content-block");
    blocks.forEach((block, idx) => {
        if (idx === (taskNumber - 1)) {
            block.style.display = "block";
            setTimeout(() => { block.style.opacity = "1"; }, 50);
        } else {
            block.style.display = "none";
            block.style.opacity = "0";
        }
    });
}

/**
 * ==========================================================================
 * METRICS & TIMELINE GRAPHICS RENDER ENGINE
 * Xử lý nạp dữ liệu cho trang Tổng kết: Progress Bars, Timeline tương tác
 * ==========================================================================
 */
function renderSummaryPage() {
    const s = portfolioData.summary;
    
    // Progress bar processing (Giữ nguyên)
    const skillsContainer = document.getElementById("skills-progress-bars");
    skillsContainer.innerHTML = s.skills.map(skill => `
        <div class="progress-bar-group">
            <div class="progress-header">
                <span><strong>${skill.name}</strong></span>
                <span>${skill.percent}%</span>
            </div>
            <div class="progress-track">
                <div class="progress-fill" data-width="${skill.percent}%"></div>
            </div>
        </div>
    `).join('');

    // Đổ dữ liệu Trải nghiệm thực tế & kỹ năng quan trọng học được
    document.getElementById("summary-experiences-box").innerHTML = `
        <p style="color: var(--text-primary); font-style: italic; margin-bottom: 0.8rem;">
            <i class="fa-solid fa-quote-left" style="color: var(--primary-light); margin-right: 0.4rem;"></i>${s.experiences}
        </p>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">
            <strong><i class="fa-solid fa-graduation-cap"></i> Kiến thức quan trọng nhất:</strong> ${s.skillsHighlighted}
        </p>
    `;

    // Đổ dữ liệu điểm tâm đắc và thách thức thực tế đối mặt
    document.getElementById("summary-highlights").innerText = s.highlights;
    document.getElementById("summary-challenges").innerText = s.challenges;

    // Dynamic timeline rendering (Giữ nguyên)
    const timelineContainer = document.getElementById("future-timeline");
    timelineContainer.innerHTML = s.roadmap.map(rm => `
        <div class="timeline-item">
            <span class="timeline-date">${rm.year}</span>
            <p><strong>${rm.plan}</strong></p>
        </div>
    `).join('');
}

/**
 * ==========================================================================
 * UX/UI ANIMATION CONTROL & INTERACTIONS SYSTEM
 * Các tính năng bổ trợ: Mobile Menu, Smooth Navigation Tracker, Dark Mode, Scroll Effect
 * ==========================================================================
 */

// 1. Mobile Responsive Burger Toggle Navigation Menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
});

navLinksItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("toggle");
    });
});

// 2. High-Fidelity SPA Router Simulation Management
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        
        // Update active class on nav link items
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Section toggle handling with fade animations
        sections.forEach(sec => {
            if(sec.id === targetId) {
                sec.classList.add("active-section");
                // Auto trigger progress bar fills animate on entering summary view area
                if (targetId === "summary") {
                    setTimeout(animateProgressBars, 150);
                }
            } else {
                sec.classList.remove("active-section");
            }
        });

        // Smart Window View Scroll position reset
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function animateProgressBars() {
    const fills = document.querySelectorAll(".progress-fill");
    fills.forEach(f => {
        f.style.width = f.getAttribute("data-width");
    });
}

// 3. System Advanced Dark Mode Operations Controller Engine
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";

    if(currentTheme === "light") {
        targetTheme = "dark";
        themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }

    document.documentElement.setAttribute("data-theme", targetTheme);
});

// 4. Back To Top Automation Element Triggering
const bttBtn = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 400) {
        bttBtn.style.display = "flex";
    } else {
        bttBtn.style.display = "none";
    }
});
bttBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 5. Intersection Observer Fade-In Scroll Animation Matrix
function registerScrollAnimations() {
    const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    document.querySelectorAll(".fade-in").forEach(el => {
        appearOnScroll.observe(el);
    });
}
