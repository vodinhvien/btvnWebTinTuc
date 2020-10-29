import './NavBar.css';
function Navi() {
    return (
    <>
      
        <ul id="center" className="nav justify-content-center">
            <li className="nav-item">
                <a id="nav-a" className="nav-link active" href="#">Khoa học</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Thời sự</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Thế giới</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Pháp luật</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Giải trí</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Giáo dục</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Sức khoẻ</a>
            </li>
            <li className="nav-item">
                <a id="nav-a" className="nav-link" href="#">Đời sống</a>
            </li>
        </ul>
    </>
    );
}

export default Navi;