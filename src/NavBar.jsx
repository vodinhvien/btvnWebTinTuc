import './NavBar.css';
function Navi() {
    return (
    <>
        <a class="navbar-brand" href="#">
            <img id="logo" src="https://image.freepik.com/free-vector/newspaper-logo_10250-2348.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>
        </a>
        <ul id="center" class="nav justify-content-center">
            <li class="nav-item">
                <a id="nav-a" class="nav-link active" href="#">Khoa học</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Thời sự</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Thế giới</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Pháp luật</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Giải trí</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Giáo dục</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Sức khoẻ</a>
            </li>
            <li class="nav-item">
                <a id="nav-a" class="nav-link" href="#">Đời sống</a>
            </li>
        </ul>
    </>
    );
}

export default Navi;