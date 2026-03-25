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
        <div className="team-slider observe-fade">
          <div className="team-track">
            <div className="team-card">
              <div className="team-portrait portrait-6">
                <img src="/team/oda.jpg" alt="Kazuhiro Oda" className="portrait-image" />
                <div className="portrait-initial">K</div>
                <div className="portrait-role-badge">PM</div>
              </div>
              <h3 className="team-name">Kazuhiro Oda</h3>
              <p className="team-role">プロジェクトマネージャー / 営業担当</p>
              <p className="team-bio">
                金融機関での商品企画・営業からおよびコンサルティングファームでの営業部門の立ち上げ等、異なる領域をゼロから切り拓いてきた経験を持つ。プロジェクト全体の推進と顧客折衝を担い、チームの力を最大化します。
              </p>
            </div>
            <div className="team-card">
              <div className="team-portrait portrait-1">
                <img src="/team/okamoto.jpg" alt="Hiromitsu Okamoto" className="portrait-image" />
                <div className="portrait-initial">H</div>
                <div className="portrait-role-badge">Admin</div>
              </div>
              <h3 className="team-name">Hiromitsu Okamoto</h3>
              <p className="team-role">営業・事務担当</p>
              <p className="team-bio">
                様々な業界経験があり、お客様にご満足いただけるようチームを支える縁の下の力持ち。プロジェクトにおける総務の役割を担当します。
              </p>
            </div>
            <div className="team-card">
              <div className="team-portrait portrait-2">
                <img src="/team/hirai.jpg" alt="Makoto Hirai" className="portrait-image" />
                <div className="portrait-initial">M</div>
                <div className="portrait-role-badge">Design</div>
              </div>
              <h3 className="team-name">Makoto Hirai</h3>
              <p className="team-role">Webデザイン・Webコーディング</p>
              <p className="team-bio">
              </p>
            </div>
            <div className="team-card">
              <div className="team-portrait portrait-3">
                <img src="/team/nishibata.jpg" alt="Rena Nishibata" className="portrait-image" />
                <div className="portrait-initial">R</div>
                <div className="portrait-role-badge">Engineer</div>
              </div>
              <h3 className="team-name">Rena Nishibata</h3>
              <p className="team-role">Webコーディング / IT・業務効率化 / 事務</p>
              <p className="team-bio">
                業務効率化とツール開発を得意とするシステムエンジニアです。現場に寄り添った改善提案と丁寧な対応を大切にしています。
              </p>
            </div>
            <div className="team-card">
              <div className="team-portrait portrait-4">
                <img src="/team/oka.jpg" alt="Misato Oka" className="portrait-image" />
                <div className="portrait-initial">M</div>
                <div className="portrait-role-badge">Design</div>
              </div>
              <h3 className="team-name">Misato Oka</h3>
              <p className="team-role">グラフィックデザイン</p>
              <p className="team-bio">
                グラフィックデザイナーとして活躍している方の元でデザインを学び、それを活かし、現在POPやチラシ、本の表紙デザイン、バナーデザイン作成などに携わっています。
              </p>
            </div>
            <div className="team-card">
              <div className="team-portrait portrait-5">
                <img src="/team/oishi.jpg" alt="Mai Oishi" className="portrait-image" />
                <div className="portrait-initial">M</div>
                <div className="portrait-role-badge">Design</div>
              </div>
              <h3 className="team-name">Mai Oishi</h3>
              <p className="team-role">Webデザイナー・コーダー / Web Designer・Markup Engineer</p>
              <p className="team-bio">
                ヒアリングからデザイン、実装を見据えた設計まで、一つひとつ丁寧に向き合っています。情報整理と見やすさを大切にし、伝えたいことがきちんと届くWeb制作を目指しています。
              </p>
            </div>
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
        <a href="mailto:marketing@unalogy.com" className="btn-secondary">
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
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-links">
              <li><a href="#contact">無料相談</a></li>
              <li><a href="mailto:marketing@unalogy.com">marketing@unalogy.com</a></li>
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
