export function showModal(title: string, content: string, opt: (() => void) | null, type = 'success') {
    // 创建遮罩层
    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '9999', // 确保弹窗在最上层
    });

    // 创建弹窗容器
    const modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '12px',
        width: '320px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // 内容居中
        overflow: 'visible', // 允许内容溢出
    });

    // 创建关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    Object.assign(closeBtn.style, {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#666',
    });

    // 创建图片
    const modalImage = document.createElement('img');
    modalImage.src = type === 'success' ? "/Images/success.png" : "/Images/failed.png";
    Object.assign(modalImage.style, {
        width: '120px', // 图片宽度
        height: '120px', // 图片高度
        position: 'absolute', // 绝对定位
        top: '-60px', // 图片一半在弹窗外
        left: '50%', // 水平居中
        transform: 'translateX(-50%)', // 水平居中
    });
    console.log(modalImage);

    // 创建标题
    const modalTitle = document.createElement('div');
    modalTitle.textContent = title;
    Object.assign(modalTitle.style, {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '70px', // 留出图片的空间
        marginBottom: '15px',
        color: type === 'success' ? '#00C851' : '#ff4444',
        textAlign: 'center', // 标题居中
    });

    // 创建内容
    const modalContent = document.createElement('div');
    modalContent.innerHTML = content;
    Object.assign(modalContent.style, {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center', // 内容居中
    });

    // 组装弹窗
    modal.appendChild(closeBtn);
    modal.appendChild(modalImage); // 添加图片
    modal.appendChild(modalTitle);
    modal.appendChild(modalContent);
    overlay.appendChild(modal);

    // 关闭功能
    const close = () => {
        document.body.removeChild(overlay);
        if (opt !== null) {
            opt();
        }
    }
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });

    // 显示弹窗
    document.body.appendChild(overlay);
}