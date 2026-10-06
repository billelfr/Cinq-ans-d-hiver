import { useState } from 'react';

const translations = {
    en: {
        brand: 'Farah Tilmatine',
        role: 'Writer & Poet',
        nav: [
            { label: 'Biography', href: '#biographie' },
            { label: 'Work', href: '#oeuvre' },
            { label: 'Poetry', href: '#poeme' },
            { label: 'Contact', href: '#contact' },
        ],
        eyebrow: 'Literary voice of Algeria',
        subtitle: 'Writer & Poet',
        quote: '“Words sometimes become windows to what we cannot say.”',
        lead: 'An introspective writing born at the crossroads of memory, persistent cold, and quiet beauty. Through her verses, each raindrop becomes the enduring memory of a recovered feeling.',
        primaryCta: 'Discover her universe',
        secondaryCta: 'Read an excerpt',
        about: 'About',
        aboutTitle: 'The Pen & the Shadow',
        bio: [
            'Born in Algeria, Farah Tilmatine weaves a poetry of intimate and universal silence through the winters. Her texts explore memory, rain falling on broken windows, and that stubborn light that persists in the hollow of wounds.',
            'Between French and the discreet echo of her native land, her writing transforms the ordinary into an instant of eternity. Farah Tilmatine approaches absence not as an irreparable void, but as a silent presence that learns to look at the world again with gravity and tenderness.',
            'Her collections are conceived as melancholic harbors, where the rigor of stripped words meets the sensuality of pure emotion. For the author, writing is a gesture of resistance against forgetting: a way of sculpting the brilliance of the sky into the everlasting gray of cold seasons.'
        ],
        footerQuote: '“A word born to warm memory.”',
        parution: 'Publication',
        workTitle: 'Works & Publications',
        bookType: 'Poetry collection',
        bookTitle: 'Five Years of Winter',
        bookSubtitle: 'Five Years of Winter',
        bookQuote: '“Five Years of Winter is a poetry with simple yet profound vocabulary, simple yet transforming every word into an instant... Since it is the harmony of letters that builds a word.”',
        meta: {
            author: 'Author',
            authorName: 'Tilmatine Farah',
            publisher: 'Publisher',
            publisherName: 'Éditions Inar (دار ينار للنشر والتوزيع والترجمة)',
            genre: 'Genre',
            genreName: 'Introspective poetry',
            language: 'Language',
            languageName: 'French / Bilingual edition',
        },
        order: 'Information & Order',
        poemTag: 'Excerpt from the collection',
        poemLines: [
            '“Five years of winter... five years of rain...',
            'And it is always beautiful at home,',
            'Because when it rains,',
            'My feelings are there,',
            'Reminding me of myself... and of you!”'
        ],
        poemCite: '— Farah Tilmatine, Five Years of Winter',
        contactLabel: 'Correspondence',
        contactTitle: 'Write to the author',
        contactText: 'For literary invitations, book signings, library encounters, or to send a personal note to Farah Tilmatine.',
        mail: 'contact@farahtilmatine.com',
        note: 'Work distributed in collaboration with Éditions Inar (ینار)',
        footerBrand: 'Farah Tilmatine',
        footerRole: 'Writer · Poet',
        copyright: '© 2026 Farah Tilmatine. All rights reserved.',
        backToTop: 'Back to top',
        menuAria: 'Toggle navigation',
        bookCaption: 'Five Years of Winter',
        bookEdition: 'Éditions Inar',
        topLabel: 'Home',
        lang: 'FR'
    },
    fr: {
        brand: 'Farah Tilmatine',
        role: 'Écrivaine & Poétesse',
        nav: [
            { label: 'Biographie', href: '#biographie' },
            { label: "L'œuvre", href: '#oeuvre' },
            { label: 'Poésie', href: '#poeme' },
            { label: 'Contact', href: '#contact' },
        ],
        eyebrow: 'Voix littéraire d’Algérie',
        subtitle: 'Écrivaine & Poétesse',
        quote: '« Les mots deviennent parfois des fenêtres vers ce que nous ne savons pas dire. »',
        lead: 'Une écriture introspective née au croisement de la mémoire, du froid persistant et de la beauté silencieuse. À travers ses vers, chaque goutte de pluie devient la mémoire tenace d’un sentiment retrouvé.',
        primaryCta: 'Découvrir son univers',
        secondaryCta: 'Lire un extrait',
        about: 'À propos',
        aboutTitle: 'La Plume & l’Ombre',
        bio: [
            'Née en Algérie, Farah Tilmatine tisse dans le silence des hivers une poésie à la fois intime et universelle. Ses textes explorent la mémoire, la pluie qui tombe sur les vitres brisées, et cette lumière obstinée qui persiste au creux des blessures.',
            'Entre le français et l’écho discret de sa terre natale, son écriture transforme l’ordinaire en instant d’éternité. Farah Tilmatine aborde l’absence non comme un vide irrémédiable, mais comme une présence silencieuse qui réapprend à regarder le monde avec gravité et tendresse.',
            'Ses recueils sont conçus comme des havres mélancoliques, où la rigueur du mot dépouillé côtoie la sensualité de l’émotion pure. Pour l’auteure, écrire est un geste de résistance contre l’oubli : une façon de sculpter l’éclat du ciel dans le gris impérissable des saisons froides.'
        ],
        footerQuote: '« Une parole née pour réchauffer la mémoire. »',
        parution: 'Parution',
        workTitle: 'Œuvres & Publications',
        bookType: 'Recueil de poèmes',
        bookTitle: 'Cinq ans d’hiver',
        bookSubtitle: 'Five Years of Winter',
        bookQuote: '« Cinq ans d’hiver est une poésie avec un vocabulaire simple mais profond, simple mais qui transforme chaque mot en un instant... Puisque c’est l’harmonie des lettres qui construit un mot. »',
        meta: {
            author: 'Auteure',
            authorName: 'Tilmatine Farah',
            publisher: 'Maison d’édition',
            publisherName: 'Éditions Inar (دار ينار للنشر والتوزيع والترجمة)',
            genre: 'Genre',
            genreName: 'Poésie introspective',
            language: 'Langue',
            languageName: 'Français / Titrage bilingue',
        },
        order: 'Renseignements & Commande',
        poemTag: 'Extrait du recueil',
        poemLines: [
            '« Cinq ans d’hiver... cinq ans de pluie...',
            'Et il fait toujours beau chez moi,',
            'Parce que quand il pleut,',
            'Mes sentiments sont là,',
            'Me rappelant de moi... et de toi ! »'
        ],
        poemCite: '— Farah Tilmatine, Cinq ans d’hiver',
        contactLabel: 'Correspondance',
        contactTitle: 'Écrire à l’auteure',
        contactText: 'Pour les invitations littéraires, séances de dédicaces, rencontres en librairie ou pour adresser un mot personnel à Farah Tilmatine.',
        mail: 'contact@farahtilmatine.com',
        note: 'Ouvrage diffusé en collaboration avec les Éditions Inar (ینار)',
        footerBrand: 'Farah Tilmatine',
        footerRole: 'Écrivaine · Poétesse',
        copyright: '© 2026 Farah Tilmatine. Tous droits réservés.',
        backToTop: 'Haut de page',
        menuAria: 'Ouvrir le menu',
        bookCaption: 'Cinq ans d’hiver',
        bookEdition: 'Éditions Inar (ينار)',
        topLabel: 'Accueil',
        lang: 'EN'
    }
};

const bookImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOLakbReJHTNLI920YtFeylzUcwVPop405tku_KpZ6g-7bfNTQFO6AN2ATW9fS51nMc2UOoqVD1wak-Hrml2ZXlkykpr47gNO_IBeSdZwclrd3EW2L5wXzk1pGZJ-0iYamJwxhpLKseeEXXdn2vzi-1uKyKRQBRVckzSbSihQuhLhvm-ozFHRxach9YgknPfCFUols9gj-3lLRrnVqHdRR1eN6LPfZyZnP7yaruoSEQCCRhKctgjn1cJgEO_66vw0C6cY';

const fullBookImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzBgwUbSU9Ztesx3Wp-_moo_tBgFDZZZnGMroqGHpBtMlSOOLJcSvxJTVBz_92KUnwOYKM2v5d-NKD304uS0TJAmwRzumb04Kx1ZMNB-ChiIQ5-8ZDjPuBlU2gKMrtvVWk-dug-tgcbIOJVjcAQ-Vm4Z2jB46I0mkzT_1boiGwYGuD2IN12vS8e_pCVDjU4yqwTXEXARGrpFW8AWl4Rn8hvQJtRCKVjqEpDFigkbqgqYyxur2Daia6QQ';

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState('en');
    const t = translations[lang];
    const navItems = t.nav;

    return (
        <>
            <header className="site-header">
                <div className="topbar container">
                    <div className="brand-block" aria-label="Farah Tilmatine Accueil">
                        <div className="brand-name">{t.brand}</div>
                        <div className="brand-sub">{t.role}</div>
                    </div>

                    <div className="nav-shell">
                        <button
                            type="button"
                            className="language-switch"
                            onClick={() => setLang((current) => (current === 'en' ? 'fr' : 'en'))}
                            aria-label="Toggle language"
                        >
                            {t.lang}
                        </button>

                        <button
                            type="button"
                            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                            aria-label={t.menuAria}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>

                        <div
                            className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(false)}
                            aria-hidden="true"
                        />

                        <nav
                            id="mobile-menu"
                            className={`main-nav ${menuOpen ? 'open' : ''}`}
                            aria-label="Menu principal"
                            aria-expanded={menuOpen}
                        >
                            {navItems.map(({ label, href }) => (
                                <a key={label} href={href} className="nav-link" onClick={() => setMenuOpen(false)}>
                                    {label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <section className="hero-section">
                    <div className="container hero-row">
                        <div className="hero-copy">
                            <span className="eyebrow uppercase">{t.eyebrow}</span>
                            <h1>{t.brand}</h1>
                            <p className="title-sub uppercase">{t.subtitle}</p>

                            <blockquote className="hero-quote">{t.quote}</blockquote>

                            <p className="lead">{t.lead}</p>

                            <div className="cta-row">
                                <a href="#oeuvre" className="button button-primary">
                                    {t.primaryCta}
                                </a>
                                <a href="#poeme" className="button button-ghost">
                                    {t.secondaryCta} <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        <div className="hero-art">
                            <div className="book-scene">
                                <img src={bookImage} alt="Cinq ans d'hiver - Farah Tilmatine" className="book-cover" />
                            </div>

                            <div className="book-caption">
                                <span className="book-title">{t.bookCaption}</span>
                                <span className="book-edition">{t.bookEdition}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bio-section" id="biographie">
                    <div className="container bio-wrap">
                        <div className="section-heading centered">
                            <span className="section-kicker">{t.about}</span>
                            <h2>{t.aboutTitle}</h2>
                            <div className="divider" />
                        </div>

                        <article className="bio-copy">
                            {t.bio.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </article>

                        <div className="bio-footer">
                            <span className="small-label uppercase">Littérature contemporaine algérienne</span>
                            <span className="quote-line">{t.footerQuote}</span>
                        </div>
                    </div>
                </section>

                <section className="work-section" id="oeuvre">
                    <div className="container work-wrap">
                        <div className="section-heading centered">
                            <span className="section-kicker">{t.parution}</span>
                            <h2>{t.workTitle}</h2>
                            <div className="divider" />
                        </div>

                        <div className="featured-book-card">
                            <div className="feature-image-box">
                                <img src={fullBookImage} alt="Présentation complète du recueil Cinq ans d'hiver" />
                            </div>

                            <div className="feature-content">
                                <div className="feature-header">
                                    <span className="meta-tag">{t.bookType}</span>
                                    <h3>{t.bookTitle}</h3>
                                    <p>{t.bookSubtitle}</p>
                                </div>

                                <div className="feature-quote">{t.bookQuote}</div>

                                <ul className="book-meta-list">
                                    <li>
                                        <span>{t.meta.author}</span>
                                        <strong>{t.meta.authorName}</strong>
                                    </li>
                                    <li>
                                        <span>{t.meta.publisher}</span>
                                        <strong>{t.meta.publisherName}</strong>
                                    </li>
                                    <li>
                                        <span>{t.meta.genre}</span>
                                        <strong>{t.meta.genreName}</strong>
                                    </li>
                                    <li>
                                        <span>{t.meta.language}</span>
                                        <strong>{t.meta.languageName}</strong>
                                    </li>
                                </ul>

                                <div className="feature-cta">
                                    <a href="#contact">{t.order} <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="poem-section" id="poeme">
                    <div className="container poem-wrap">
                        <span className="poem-tag">{t.poemTag}</span>
                        <blockquote className="poem-text">
                            {t.poemLines.map((line) => (
                                <p key={line}>{line}</p>
                            ))}
                        </blockquote>
                        <cite className="poem-cite">
                            {t.poemCite}
                        </cite>
                    </div>
                </section>

                <section className="contact-section" id="contact">
                    <div className="container contact-wrap">
                        <span className="section-kicker">{t.contactLabel}</span>
                        <h2>{t.contactTitle}</h2>
                        <p>{t.contactText}</p>
                        <a href="mailto:contact@farahtilmatine.com" className="mail-link">
                            {t.mail}
                        </a>
                        <div className="contact-note">{t.note}</div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container footer-row">
                    <div className="footer-brand">
                        <span className="footer-name">{t.footerBrand}</span>
                        <span className="footer-role">{t.footerRole}</span>
                    </div>

                    <div className="copyright">{t.copyright}</div>

                    <a href="#" className="to-top">{t.backToTop} ↑</a>
                </div>
            </footer>
        </>
    );
}

export default App;
