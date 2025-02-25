function toggleSlide() {
    const testContainer = document.getElementById('testContainer');

    if (testContainer) {
        testContainer.classList.toggle('open');
    } else {
        return;
    }
    
}

function togglePanel(panelId, column) {
    const panelCon = document.getElementById(panelId);
    const activePanel = document.querySelector('.panel-wrap.active');
    const chatButtons = document.querySelectorAll('.chat-menu .btn');
    const sectionWrap = document.querySelector('div.section-wrap');
    const clickedButton = event.currentTarget;

    if (activePanel && activePanel !== panelCon) {
        activePanel.classList.remove('active');
        activePanel.style.display = 'none';
    }

    if (panelCon) {
        const isActive = panelCon.classList.contains('active');
        panelCon.classList.toggle('active', !isActive);
        sectionWrap.classList.add('panel-active');
        panelCon.style.display = isActive ? 'none' : 'block';
    }

    if (chatButtons) {
        chatButtons.forEach(chatButton => chatButton.classList.remove('active'));
    }

    if (column) {
        column.classList.toggle('active');
    }

    if (!panelCon.classList.contains('active')) {
        clickedButton.classList.remove('active');
        sectionWrap.classList.remove('panel-active');
    } else {
        clickedButton.classList.add('active');
    }
}

function openPanel(panelId) {
    const panelCon = document.querySelectorAll(".panel-wrap");
    panelCon.forEach(panel => panel.classList.remove("active"));

    const sectionWrap = document.querySelector(".section-wrap");
    if (sectionWrap) {
        sectionWrap.classList.add("panel-active");
    }

    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add("active");
    }
}

function closePanel() {
    const activePanel = document.querySelector('.panel-wrap.active');
    const buttons = document.querySelectorAll('.chat-menu .btn');
    const panelCon = document.querySelector('fourth-panel.panel-wrap');
    const sectionWrap = document.querySelector('div.section-wrap');
    const clickedButton = event.currentTarget;

    if (activePanel) {
        activePanel.classList.remove('active');
        sectionWrap.classList.remove('panel-active');
        activePanel.style.display = 'none';
    }

    buttons.forEach(button => button.classList.remove('active'));

    if (!panelCon.classList.contains('active')) {
        clickedButton.classList.remove('active');
        sectionWrap.classList.remove('panel-active');
    } else {
        clickedButton.classList.add('active');
    }
}

function mobileMenu() {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const content = document.getElementById("main")
    
    sidebar.classList.toggle("expand");
    content.classList.toggle("expand");

}

function toggleTable(item) {
    const content = document.getElementById(item);

    content.classList.toggle('show');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.style.display = 'flex';
    
}

function closeModal(button) {
    const modal = button.closest('.modal-container');
    if (modal) {
        modal.style.display = 'none';
    }
}

function toggleDetails(clickedTd) {
    const parentRow = clickedTd.closest("tr");
    const groupId = parentRow.nextElementSibling?.dataset.group;
    if (!groupId) return;

    const detailRows = document.querySelectorAll(`[data-group="${groupId}"]`);
    const isExpanded = detailRows[0].style.display === "table-row";
    const icon = clickedTd.querySelector("i");

    detailRows.forEach(row => {
        row.style.display = isExpanded ? "none" : "table-row";
        row.style.height = isExpanded ? "0" : `${row.scrollHeight}px`;
        row.style.opacity = isExpanded ? "0" : "1";
    });

    icon?.classList.toggle("fa-chevron-down", isExpanded);
    icon?.classList.toggle("fa-chevron-up", !isExpanded);
}

document.addEventListener('DOMContentLoaded', function() {
    const bottomSheetLayer = document.getElementsByClassName('bottomsheet-layer')[0];
    const bottomSheet = document.getElementsByClassName('bottomsheet-container')[0];

    bottomSheetLayer.addEventListener('click', function() {
        bottomSheet.style.display = 'none';
    });
});

