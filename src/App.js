import './css/App.css';
import photo from './img/Photo.JPG';
import gitLogo from './img/github-mark.svg';

/**
 * ポートフォリオを作成します。
 * @returns 
 */
function App() {
  return (
    <div className="App">
      {/* ヘッダー目次 */}
      {Header()}

      {/* このサイトについて */}
      {ThisSite()}

      {/* 経歴 */}
      {AboutMe()}

      {/* 経歴 */}
      {Skill()}

      {/* <!-- プロジェクトセクション --> */}
      {Project()}

      {/* 連絡先セクション */}
      {Contact()}

    </div>
  );
}



/**
 * ヘッダーを作成します。
 */
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#Profile">Profile</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function ThisSite() {
  return (
    <section class="section">
      <h1>このサイトについて</h1>
      <p>
        このサイトでは、私のこれまでの経歴・業務・スキルをまとめております。<br></br>
        私のスキルレベルや人となりが少しでも伝わればと思い作成いたしました。<br></br>
        GitHubにソースをアップしておりますので、必要に応じてご覧ください。
      </p>
      <a href="https://github.com/shouzou-nozaki/portfolio" target="_blank" rel="noopener noreferrer">
        <img src={gitLogo} class="gitLogo" alt="gitLogo" title="GitHubへ移動" />
      </a>
    </section>
  );
}

/**
 * サマリーフォームを作成します。
 * @returns 
 */
function AboutMe() {
  return (
    <section id="Profile" class="section">
      <h1 class="title">Profile</h1>
      <div class="introduce">
        <img src={photo} alt="Photo" />
        　はじめまして、野崎章三と申します。エンジニア歴は今年で３年目を迎えています。<br></br>
        これまでは業務委託として、複数のプロジェクトでチームと協力しシステム開発を行ってきました。<br></br>
        ウォータフォール型、アジャイル型での開発を経験しており、またシステム設計に携わった経験もあります。<br></br>
        <br></br>
      
        　私は、これまでの３年間だけでもシステムエンジニアという職業を天職だと感じています。<br></br>
        そのため、今後も技術・知識ともに磨きながら、より多くの場面で活躍していきたいと考えています。<br></br>
        今回はそんな私、野崎章三について知っていただければと思っています。
        <br></br>
      </div>
      <div class="introduce">
        <p class="text">
          <h2 class="title">経歴</h2>
          <ul>
            <li>【2016.04】  福井県立武生東高校 普通科 入学</li>
            <br></br>
            <li>【2019.04】  国立大学法人福井大学 工学部 電気電子情報工学科 入学</li>
            <br></br>
            <li>【2021.10】  国立大学法人福井大学 工学部 電気電子情報工学科 中途退学</li>
            <br></br>
            <li>【2021.12】  株式会社アートプロデザインワークス 入社</li>
            <br></br>
            <li>【2024.9】 To Be Continue...</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

/**
 * スキルフォームを作成します。
 * @returns 
 */
function Skill() {
  return (
    <section class="section" id="Skills">
      <div class="inner">
        <div class="section-title-block">
          <h2 class="title"><i class="fas fa-lightbulb fa-lg"><span class="section-title-css">Skills</span></i>
          </h2>
          {/* ここに業務経験あり or なし　のルールを記載(色)する */}
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
                <p>直近ではAngularを使用して開発していました。</p>
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
  );
}

/**
 * プロジェクトフォームを作成します。
 * @returns 
 */
function Project() {
  return (
    <section id="Projects" class="section">
      <h2 class="title">Projects</h2>
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
  );
}

/**
 * 連絡先フォームを作成します。
 * @returns 
 */
function Contact() {

  return (
    <section id="Contact" class="section">
      <h2>Contact</h2>
      <form action="#" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="message">Comment:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );

}

export default App;
