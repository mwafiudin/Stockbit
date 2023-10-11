export default function Home() {
  return (
    <main className="bg-cuanbot text-white">
      {/* Header Nav*/}
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

      {/* Greetings header */}
      <header>
        <div className="m-5">
          <a href="">Hello, mwafiudin!</a>
        </div>

        {/* Page Option */}
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

      {/* Nav bot overview */}
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

        {/* Box bot overview */}
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

        {/* box run automation */}
        <div className="border-4 border-dotted flex justify-center border-red-600 m-8 rounded-3xl">
          <a href="" className="flex p-5 m-5">
            <img src="" alt="add icon" className="mx-5" />
            <span>Run Automation</span>
          </a>
        </div>
      </div>

        {/* Box recent activity header */}
        <div className="flex justify-between m-5 p-5">
            <span>Recent Activity</span>
            <img src="" alt="Filter icon" />
        </div>

        {/* Box recent activity */}
        <div className="flex flex-col">
          <ul>
            <li>
              <a href="">
              <img src="" alt="BuySell Icon" />
              <div>
              <span>SEMA</span>
              </div>
              </a>
            </li>
          </ul>
        </div>
    </main>
  );
}
