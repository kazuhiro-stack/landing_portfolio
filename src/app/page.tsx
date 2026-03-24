import HeroIllustration from "@/components/HeroIllustration";
import ScrollObserver from "@/components/ScrollObserver";
import MobileNav from "@/components/MobileNav";

const marqueeItems = [
  "Web Design",
  "旅行業界特化",
  "UI / UX",
  "SEO対策",
  "ブランディング",
  "コンバージョン改善",
];

export default function Home() {
  return (
    <>
      <ScrollObserver />

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          Voyage Works
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <MobileNav />
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">旅行業界 × Web制作</p>
          <h1 className="hero-title">
            旅の魅力を、
            <br />
            <em>Webで</em>
            <br />
            伝える。
          </h1>
          <p className="hero-subtitle">
            旅行業界に特化したWeb制作集団。
            <br />
            集客・体験設計まで、
            <br />
            デジタルの力で旅をデザインします。
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              <span>お問い合わせ</span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-map-bg" />
          <div className="hero-svg-wrap">
            <HeroIllustration />
          </div>
          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item} <span className="marquee-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="section-about" id="about">
        <div className="about-left observe-fade">
          <p className="about-number">— 01 / About</p>
          <h2 className="about-heading">
            旅の魅力を届ける
            <br />
            <em>クリエイティブ</em>
            <br />
            <em>チーム。</em>
          </h2>
          <p className="about-body">
            私たちVOYAGE
            WORKSは、旅行会社・ホテル・観光施設のWeb改善に特化したクリエイティブチームです。デザインとコードの力で、旅の魅力を最大限に引き出し、成果を届けます。
          </p>
        </div>
        <div className="about-right observe-fade">
          <p className="about-body-right">
            Webサイトのリニューアルからコンバージョン改善、SEO・コンテンツ戦略まで。旅行ビジネスの成長をデジタルの力でサポートします。
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-services" id="services">
        <div className="services-header observe-fade">
          <span className="section-label">— 02 / Services</span>
          <h2 className="section-title">
            旅行業に特化した
            <br />
            Web制作サービス
          </h2>
        </div>
        <div className="services-grid observe-fade">
          <div className="service-card">
            <div className="service-num">01</div>
            <h3 className="service-title">
              Webサイト
              <br />
              リニューアル
            </h3>
            <p className="service-body">
              旅行会社・ホテル・観光施設のサイトを、予約に繋がるデザインへ全面刷新。ユーザー動線の設計から実装まで一貫対応します。
            </p>
            <div className="service-tags">
              <span className="service-tag">LP制作</span>
              <span className="service-tag">CMS構築</span>
              <span className="service-tag">レスポンシブ</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">02</div>
            <h3 className="service-title">
              UX改善 /
              <br />
              CVR向上
            </h3>
            <p className="service-body">
              離脱率・コンバージョン率を徹底分析。フォーム最適化・UI改善・A/Bテストにより、既存サイトの成果向上を実現します。
            </p>
            <div className="service-tags">
              <span className="service-tag">UI改善</span>
              <span className="service-tag">A/Bテスト</span>
              <span className="service-tag">ヒートマップ</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-num">03</div>
            <h3 className="service-title">
              集客SEO/
              <br />
              コンテンツ
            </h3>
            <p className="service-body">
              旅行キーワードに精通したSEO戦略と、旅情を伝えるコンテンツ制作で、検索流入を増加させます。
            </p>
            <div className="service-tags">
              <span className="service-tag">SEO</span>
              <span className="service-tag">観光コンテンツ</span>
              <span className="service-tag">SNS連携</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-team" id="team">
        <div className="team-header observe-fade">
          <span className="section-label">— 03 / Team</span>
          <h2 className="section-title">私たちのチーム</h2>
        </div>
        <div className="team-grid observe-fade">
          <div className="team-card">
            <div className="team-portrait portrait-1">
              <div className="portrait-initial">K</div>
              <div className="portrait-role-badge">Sales</div>
            </div>
            <h3 className="team-name">Kenji Tanaka</h3>
            <p className="team-role">営業担当 / Business Development</p>
            <p className="team-bio">
              旅行業界10年以上の営業経験を持ち、クライアントの課題を深く理解。「売れるWeb」を作るための要件定義から、プロジェクト全体のコーディネートまでを担当します。
            </p>
          </div>
          <div className="team-card">
            <div className="team-portrait portrait-2">
              <div className="portrait-initial">A</div>
              <div className="portrait-role-badge">Design</div>
            </div>
            <h3 className="team-name">Aiko Yamamoto</h3>
            <p className="team-role">デザイナー / UX / Visual Design</p>
            <p className="team-bio">
              旅の感動を視覚で伝えることに情熱を注ぐデザイナー。UI/UXの論理的設計と、旅情あふれるビジュアルを両立させた「予約したくなるデザイン」を追求します。
            </p>
          </div>
          <div className="team-card">
            <div className="team-portrait portrait-3">
              <div className="portrait-initial">R</div>
              <div className="portrait-role-badge">Engineer</div>
            </div>
            <h3 className="team-name">Ryo Sasaki</h3>
            <p className="team-role">エンジニア / Frontend & CMS</p>
            <p className="team-bio">
              パフォーマンス・SEO・予約システム連携を得意とするフロントエンドエンジニア。美しいデザインを高速・高品質なコードで忠実に実装し、事業成果に繋げます。
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-process" id="process">
        <div className="process-header observe-fade">
          <span className="section-label">— 04 / Process</span>
          <h2 className="section-title">制作の流れ</h2>
        </div>
        <div className="process-steps observe-fade">
          {[
            {
              title: "ヒアリング\n& 課題整理",
              desc: "現状のWebサイトの課題、ビジネス目標、ターゲット旅行者像をヒアリング。データに基づき改善点を整理します。",
            },
            {
              title: "戦略設計\n& 提案",
              desc: "サイトマップ・UXフロー・SEO戦略を含む改善プランをご提案。旅行業の繁忙期も考慮したスケジュールを作成します。",
            },
            {
              title: "デザイン\n制作",
              desc: "ワイヤーフレームからビジュアルデザインまで。旅情を引き出すフォトグラフィーやコピーも含め制作します。",
            },
            {
              title: "実装\n& テスト",
              desc: "表示速度・SEO・予約システム連携を考慮した実装。スマートフォン対応・クロスブラウザテストも徹底します。",
            },
            {
              title: "公開後\nサポート",
              desc: "公開後もデータを分析し継続改善。旅行繁忙期に向けた施策提案など、長期パートナーとして伴走します。",
            },
          ].map((step, i) => (
            <div className="process-step" key={i}>
              <div className="step-dot" />
              <p className="step-number">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="step-title">
                {step.title.split("\n").map((line, j) => (
                  <span key={j}>
                    {line}
                    {j === 0 && <br />}
                  </span>
                ))}
              </h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta" id="contact">
        <p className="cta-label">— Contact Us</p>
        <h2 className="cta-title">
          旅行サイトの
          <br />
          <em>ポテンシャルを</em>
          <br />
          引き出しませんか。
        </h2>
        <p className="cta-subtitle">
          まずは無料相談から。現状のWebサイトの課題を一緒に洗い出し、具体的な改善案をご提案します。
        </p>
        <a href="mailto:hello@voyage-works.jp" className="btn-secondary">
          無料相談を申し込む
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">Voyage Works</div>
            <p className="footer-tagline">
              旅行業界に特化したWeb制作集団。デザイン・コード・戦略の力で、旅の魅力をデジタルで届けます。
            </p>
          </div>
          <div>
            <p className="footer-col-title">Services</p>
            <ul className="footer-links">
              <li><a href="#">Webリニューアル</a></li>
              <li><a href="#">UX改善</a></li>
              <li><a href="#">SEO / コンテンツ</a></li>
              <li><a href="#">ブランディング</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li><a href="#">無料相談</a></li>
              <li><a href="#">hello@voyage-works.jp</a></li>
              <li><a href="#">採用情報</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; 2025 Voyage Works. All rights reserved.
          </p>
          <p
            className="footer-copy"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "0.75rem",
              opacity: 0.3,
            }}
          >
            Crafted with passion for travel.
          </p>
        </div>
      </footer>
    </>
  );
}
