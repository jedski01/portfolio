var captions = [
    'Login page',
    'Registration page',
    'Room creation page',
    'Chat room page',
    'Main window with pie chart of TCP UDP Distribution',
    'Main window with bar chart of TCP UDP Distribution',
    'Ethernet Conversation',
    'IPv4 Conversation',
    'TCP Conversation',
    'UDP Conversation',
]
function showModal(id) {
    var modal = document.getElementById('myModal');
    var image = document.getElementById('modalImage');
    var caption = document.getElementById('caption');
    
    image.src = "images/"+id+".PNG";
    caption.innerHTML = captions[id];
    
    modal.style.display = "block";
}