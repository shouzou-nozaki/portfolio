import './App.css';

function App() {
  return (
    <div className="App">
      {/* ヘッダー目次 */}
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 経歴 */}
      <section id="about" class="section">
        <h1>経歴</h1>
        <p>システムエンジニアとして3年実務経験を積んできました。開発手法としてはウォーターフォール、アジャイル(SAFe)どちらも経験しております。
        </p>
      </section>

      {/* 経歴 */}
      <section class="section">
        <div class="inner">
          <div class="section-title-block">
            <h2 class="section-title"><i class="fas fa-lightbulb fa-lg"><span class="section-title-css">SKILL</span></i>
            </h2>
            <p class="section-desc"></p>
          </div>
          <div class="card-wrapper">
            <div class="card">
              <div class="skill-desc">
                <h3 class="skill-desc-title"><i class="fas fa-desktop"></i>デザイン・コーディング</h3>
                <p>基本的な事は一通りできます。CSSフレームワークはbootstrap使いました。</p>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">技術</th>
                      <th scope="col">経験年数</th>
                      <th scope="col">スキル</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">HTML5</th>
                      <td>1年</td>
                      <td><span class="rating">
                        <p class="rate rate4"></p>
                      </span></td>
                    </tr>
                    <tr>
                      <th scope="row">CSS3</th>
                      <td>1年</td>
                      <td><span class="rating">
                        <p class="rate rate4"></p>
                      </span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card">

                <div class="skill-desc">
                  <h3 class="skill-desc-title"><i class="fas fa-desktop"></i>フロントエンド</h3>
                  <p>直近ではAngularJSを使用して開発していました。</p>
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">技術</th>
                        <th scope="col">経験年数</th>
                        <th scope="col">スキル</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">JavaScrpt</th>
                        <td>2年</td>
                        <td><span class="rating">
                          <p class="rate rate5"></p>
                        </span></td>
                      </tr>
                      <tr>
                        <th scope="row">TypeScript</th>
                        <td>1年</td>
                        <td><span class="rating">
                          <p class="rate rate4"></p>
                        </span></td>
                      </tr>
                      <tr>
                        <th scope="row">Angular</th>
                        <td>1年</td>
                        <td><span class="rating">
                          <p class="rate rate4"></p>
                        </span></td>
                      </tr>
                      <tr>
                        <th scope="row">Ruby</th>
                        <td>1年</td>
                        <td><span class="rating">
                          <p class="rate rate4"></p>
                        </span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="card">
                  <div class="skill-desc">
                    <h3 class="skill-desc-title"><i class="fas fa-desktop"></i>バックエンド</h3>
                    <p>直近ではjavaを使用した開発を行いました。</p>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">技術</th>
                          <th scope="col">経験年数</th>
                          <th scope="col">スキル</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">VB.NET</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate4"></p>
                          </span></td>
                        </tr>
                        <tr>
                          <th scope="row">C#</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate5"></p>
                          </span></td>
                        </tr>
                        <tr>
                          <th scope="row">Java</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate5"></p>
                          </span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card">
                  <div class="skill-desc">
                    <h3 class="skill-desc-title"><i class="fas fa-database"></i>DB</h3>
                    <p>直近ではOracleを使用しました。</p>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">技術</th>
                          <th scope="col">経験年数</th>
                          <th scope="col">スキル</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">SQLSERVER</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate4"></p>
                          </span></td>
                        </tr>
                        <tr>
                          <th scope="row">Oracle</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate4"></p>
                          </span></td>
                        </tr>
                        <tr>
                          <th scope="row">PostgreSQL</th>
                          <td>数か月</td>
                          <td><span class="rating">
                            <p class="rate rate4"></p>
                          </span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card">
                  <div class="skill-desc">
                    <h3 class="skill-desc-title"><i class="fas fa-toolbox"></i>その他</h3>
                    <p>開発等で使用したツールやFWです。</p>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">技術</th>
                          <th scope="col">経験年数</th>
                          <th scope="col">スキル</th>
                        </tr>
                      </thead>
                      <tbody>
                        <th scope="row">Git</th>
                        <td>2年</td>
                        <td><span class="rating">
                          <p class="rate rate4"></p>
                        </span></td>
                        <tr></tr>
                        <tr>
                          <th scope="row">Microsoft Teams</th>
                          <td>2年</td>
                          <td><span class="rating">
                            <p class="rate rate2"></p>
                          </span></td>
                        </tr>
                        <tr>
                          <th scope="row">Monday</th>
                          <td>1年</td>
                          <td><span class="rating">
                            <p class="rate rate2"></p>
                          </span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="card">
                  <div class="skill-desc">
                    <h3 class="skill-desc-title"><i class="fas fa-list-alt"></i>保有資格</h3>
                    <p>社会人になってから取得したものです。</p>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">資格</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">基本情報技術者</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- プロジェクトセクション --> */}
      <section id="projects" class="section">
        <h2>Projects</h2>
        <div class="project">
          <h3>Project A</h3>
          <p>プロジェクトAの概要をここに記載します。</p>
          <a href="#" target="_blank">詳細を見る</a>
        </div>
        <div class="project">
          <h3>Project B</h3>
          <p>プロジェクトBの概要をここに記載します。</p>
          <a href="#" target="_blank">詳細を見る</a>
        </div>
        {/* <!-- 他のプロジェクトも追加可能 --> */}
      </section>

      {/* <!-- 経歴セクション --> */}
      <section id="experience" class="section">
        <h2>Experience</h2>
        <div class="experience-item">
          <h3>自動車部品製造会社 J社</h3>
          <p>システムの設計から開発までを主に担当しました。</p>
        </div>
        <div class="experience-item">
          <h3>XYZ株式会社 (2010 - 2015)</h3>
          <p>Webアプリケーションの設計と開発を主に担当しました。</p>
        </div>
      </section>

      {/* <!-- コンタクトセクション --> */}
      <section id="contact" class="section">
        <h2>Contact</h2>
        <form action="#" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>


    </div>
  );
}

export default App;
