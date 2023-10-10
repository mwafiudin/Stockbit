export default function Home() {
  return (
    <main>
      <nav>
        <ul className="flex justify-between m-5">
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
          <li>
            <a href="">Notification</a>
          </li>
        </ul>
      </nav>

      <header>
        <div className="m-5">
          <a href="">Hello, mwafiudin!</a>
        </div>

        <div className="m-5">
          <ul>
            <li>
              <a href="">Screening List</a>
            </li>
            <li>
              <a href="">Order List</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
          </ul>
        </div>
      </header>

      <div>
        <nav>
          <ul className="flex justify-around">
            <li>
              <a href="">All</a>
            </li>
            <li>
              <a href="">Active</a>
            </li>
            <li>
              <a href="">Done</a>
            </li>
            <li>
              <a href="">Idle</a>
            </li>
          </ul>
        </nav>

        <div>
          <ul>
            <li className="m-5">
              <a href="">
                <div className="flex">
                  <img src="" alt="saham" />
                  <div className="flex justify-around">
                    <p>Bot 1</p>
                    <p>01 Sep - 30 Sep</p>
                    <p>32,697.05</p>
                  </div>
                  <div className="flex flex-wrap w-15 justify-around">
                    <p>BSJP</p>
                    <p>21 Active Days</p>
                    <p>+0.81%</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="m-5">
              <a href="">
                <div className="flex">
                  <img src="" alt="saham" />
                  <div className="flex justify-around">
                    <p>Bot 1</p>
                    <p>01 Sep - 30 Sep</p>
                    <p>32,697.05</p>
                  </div>
                  <div className="flex flex-wrap w-15 justify-around">
                    <p>BSJP</p>
                    <p>21 Active Days</p>
                    <p>+0.81%</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="m-5">
              <a href="">
                <div className="flex">
                  <img src="" alt="saham" />
                  <div className="flex justify-around">
                    <p>Bot 1</p>
                    <p>01 Sep - 30 Sep</p>
                    <p>32,697.05</p>
                  </div>
                  <div className="flex flex-wrap w-15 justify-around">
                    <p>BSJP</p>
                    <p>21 Active Days</p>
                    <p>+0.81%</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
