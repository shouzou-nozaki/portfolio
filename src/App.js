import './css/App.css';
import photo from './img/photo.JPG';
import gitLogo from './img/github-mark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 必要なアイコンをインポート
import { faLaptop, faCode, faGear, faDatabase, faToolbox, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

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
      <a href="https://github.com/shouzou-nozaki/portfolio" target="_blank">
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
            <li>【2024.9】 To Be Continued...</li>
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
      <h1 class="title">Skills</h1>
      <div class="usecase">
        業務使用：<a class="work">●</a>
        個人使用：<a class="personal">●</a>
      </div>
      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faCode} />デザイン・コーディング
        </h2>
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">技術</th>
                <th scope="col">経験年数</th>
                <th scope="col">スキル</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="left"><a class="work">●</a>HTML5</td>
                <td>1年</td>
                <td>★★★☆☆</td>
              </tr>
              <tr>
                <td class="left"><a class="work">●</a>CSS3</td>
                <td>1年</td>
                <td>★★★☆☆</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faLaptop} />フロントエンド
        </h2>
        <table>
          <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">スキル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="left"><a class="work">●</a>TypeScript</td>
              <td>1年</td>
              <td>★★☆☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>Angular</td>
              <td>1年</td>
              <td>★★☆☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="personal">●</a>React</td>
              <td>数か月</td>
              <td>★☆☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faGear} />バックエンド
        </h2>
        <table>
          <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">スキル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="left"><a class="work">●</a>VB.NET</td>
              <td>数か月</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>C#</td>
              <td>1年</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>Java</td>
              <td>1年</td>
              <td>★★☆☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="personal">●</a>Ruby</td>
              <td>1年</td>
              <td>★☆☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faDatabase} />DB
        </h2>
        <table>
          <thead>
            <tr>
              <th>技術</th>
              <th>経験年数</th>
              <th>スキル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="left"><a class="work">●</a>SQLServer</td>
              <td>1年</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>Oracle</td>
              <td>1年</td>
              <td>★★★☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="personal">●</a>MySQL</td>
              <td>1年</td>
              <td>★★☆☆☆</td>
            </tr>
            <tr>
              <td class="left"><a class="personal">●</a>PostgreSQL</td>
              <td>1年</td>
              <td>★☆☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faToolbox} />ツール
        </h2>
        <table>
          <thead>
            <tr>
              <th scope="col">技術</th>
              <th scope="col">経験年数</th>
              <th scope="col">スキル</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="left"><a class="work">●</a>Git</td>
              <td>1年</td>
              <td>★★★★☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>VSCODE</td>
              <td>1年</td>
              <td>★★★★☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>VisualStudioCode</td>
              <td>1年</td>
              <td>★★★★☆</td>
            </tr>
            <tr>
              <td class="left"><a class="work">●</a>Eclipse</td>
              <td>1年</td>
              <td>★★☆☆☆</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="skill">
        <h2 class="title">
          <FontAwesomeIcon icon={faGraduationCap} />保有資格
        </h2>
        <table>
          <tbody>
            <tr>
              <th>基本情報技術者試験</th>
            </tr>
          </tbody>
        </table>
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
        <h3>【2021.5 - 2021.8】販売管理システム改修</h3>
        <p>製造業</p>
        <p>自社顧客企業に導入している販売管理システムの機能改修を行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2021.9 - 2021.12】支払管理WEBシステム機能追加</h3>
        <p>観光業</p>
        <p>自社顧客企業に導入している支払管理WEBシステムの機能追加を行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2022.1 - 2022.4】人事管理システム改修</h3>
        <p>製造業</p>
        <p>自社顧客企業に導入している支払管理WEBシステムの機能改修を行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2022.5 - 2022.8】生産管理システム機能追加</h3>
        <p>建築業</p>
        <p>自社顧客企業に導入しているシステムの機能追加を行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2022.9 - 2023.11】脱ホストPJ連携基盤再構築</h3>
        <p>基幹システム改修に伴う影響を調査し、影響が出る箇所の改修を主に行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2023.12 - 2024.6】ホスト連動メール配信システム</h3>
        <p>自動車製造業J社</p>
        <p>既存ホスト連携メール送信システムで使用していた、サーバーOSの老朽化によるマイグレーションを行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>【2024.7 - 2025.4】車両仕様一気通貫システム</h3>
        <p>自動車製造業T社</p>
        <p>自動車製造業T社の社内システム開発を行いました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
      <div class="project">
        <h3>読書ノートアプリケーション</h3>
        <p>趣味で作成している読書ノートを、WEB上で作成できるようなアプリケーションを作成しました。</p>
        <a href="#" target="_blank">詳細を見る</a>
      </div>
    </section>
  );
}

export default App;