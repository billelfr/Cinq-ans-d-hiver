import { useEffect, useState } from 'react';

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
            'Farah Tilmatine is an author and poet whose writing explores the sensitivity of the world, the nuances of human emotions and the poetry of everyday life.',
            'Driven by a deep passion for words and artistic expression, she marks the release of her first work, in which she uses nature as a mirror of the soul. Through the breath of the wind, the light of the seasons or the silence of the landscapes, her poetry translates joy, nostalgia and inner experience with great delicacy.',
            'In parallel with her literary commitment, she is pursuing her studies in the second year of a Master’s degree in Mechanical Engineering at USTHB, cultivating a singular balance between the rigour of scientific thought and the freedom of poetic creation.'
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
            publisherName: 'Éditions Yanar (دار ينار للنشر والتوزيع والترجمة)',
            genre: 'Genre',
            genreName: 'Introspective poetry',
            language: 'Language',
            languageName: 'French (translated into English)',
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
        formName: 'Name',
        formNumber: 'Phone number',
        formEmail: 'Email',
        formSubject: 'Subject',
        formMessage: 'Message',
        formSend: 'Send to writer',
        note: 'Work distributed in collaboration with Éditions Yanar (ینار)',
        footerBrand: 'Farah Tilmatine',
        footerRole: 'Writer · Poet',
        copyright: '© 2026 Farah Tilmatine. All rights reserved.',
        backToTop: 'Back to top',
        menuAria: 'Toggle navigation',
        bookCaption: 'Five Years of Winter',
        bookEdition: 'Éditions Yanar',
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
            'Farah Tilmatine est une auteure et poète dont l’écriture explore la sensibilité du monde, les nuances des émotions humaines et la poésie du quotidien.',
            'Portée par une passion profonde pour les mots et l’expression artistique, elle signe la parution de son premier ouvrage, dans lequel elle utilise la nature comme un miroir des états d’âme. À travers le souffle du vent, la lumière des saisons ou le silence des paysages, sa poésie traduit la joie, la nostalgie et l’expérience intérieure avec une grande délicatesse.',
            'Parallèlement à son engagement littéraire, elle poursuit des études en deuxième année de Master en Génie Mécanique à l’USTHB, cultivant un équilibre singulier entre la rigueur de la pensée scientifique et la liberté de la création poétique.'
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
            publisherName: 'Éditions Yanar (دار ينار للنشر والتوزيع والترجمة)',
            genre: 'Genre',
            genreName: 'Poésie introspective',
            language: 'Langue',
            languageName: 'Français (traduit en anglais)',
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
        formName: 'Nom',
        formNumber: 'Numéro de téléphone',
        formEmail: 'Email',
        formSubject: 'Objet',
        formMessage: 'Message',
        formSend: 'Envoyer à l’auteure',
        note: 'Ouvrage diffusé en collaboration avec les Éditions Yanar (ینار)',
        footerBrand: 'Farah Tilmatine',
        footerRole: 'Écrivaine · Poétesse',
        copyright: '© 2026 Farah Tilmatine. Tous droits réservés.',
        backToTop: 'Haut de page',
        menuAria: 'Ouvrir le menu',
        bookCaption: 'Cinq ans d’hiver',
        bookEdition: 'Éditions Yanar (ينار)',
        topLabel: 'Accueil',
        lang: 'EN'
    }
};

const bookImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOLakbReJHTNLI920YtFeylzUcwVPop405tku_KpZ6g-7bfNTQFO6AN2ATW9fS51nMc2UOoqVD1wak-Hrml2ZXlkykpr47gNO_IBeSdZwclrd3EW2L5wXzk1pGZJ-0iYamJwxhpLKseeEXXdn2vzi-1uKyKRQBRVckzSbSihQuhLhvm-ozFHRxach9YgknPfCFUols9gj-3lLRrnVqHdRR1eN6LPfZyZnP7yaruoSEQCCRhKctgjn1cJgEO_66vw0C6cY';

const fullBookImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzBgwUbSU9Ztesx3Wp-_moo_tBgFDZZZnGMroqGHpBtMlSOOLJcSvxJTVBz_92KUnwOYKM2v5d-NKD304uS0TJAmwRzumb04Kx1ZMNB-ChiIQ5-8ZDjPuBlU2gKMrtvVWk-dug-tgcbIOJVjcAQ-Vm4Z2jB46I0mkzT_1boiGwYGuD2IN12vS8e_pCVDjU4yqwTXEXARGrpFW8AWl4Rn8hvQJtRCKVjqEpDFigkbqgqYyxur2Daia6QQ';

const mergeContent = (base, saved = {}) => Object.fromEntries(
    Object.keys(base).map((language) => [
        language,
        {
            ...base[language],
            ...(saved[language] || {}),
            meta: { ...base[language].meta, ...(saved[language]?.meta || {}) },
        },
    ])
);

const editorSections = [
    {
        id: 'hero',
        label: 'Hero & intro',
        fields: [
            { key: 'brand', label: 'Author name' },
            { key: 'role', label: 'Author role' },
            { key: 'eyebrow', label: 'Eyebrow' },
            { key: 'subtitle', label: 'Subtitle' },
            { key: 'quote', label: 'Quote' },
            { key: 'lead', label: 'Lead paragraph' },
            { key: 'primaryCta', label: 'Primary CTA' },
            { key: 'secondaryCta', label: 'Secondary CTA' },
            { key: 'bookCaption', label: 'Hero book caption' },
            { key: 'bookEdition', label: 'Hero edition label' },
        ],
    },
    {
        id: 'about',
        label: 'Biography',
        fields: [
            { key: 'about', label: 'Section label' },
            { key: 'aboutTitle', label: 'Section title' },
            { key: 'footerQuote', label: 'Footer quote' },
            { key: 'bio', label: 'Biography paragraphs', multi: true },
        ],
    },
    {
        id: 'work',
        label: 'Works & publications',
        fields: [
            { key: 'parution', label: 'Section label' },
            { key: 'workTitle', label: 'Section title' },
            { key: 'bookType', label: 'Book type' },
            { key: 'bookTitle', label: 'Book title' },
            { key: 'bookSubtitle', label: 'Book subtitle' },
            { key: 'bookQuote', label: 'Book quote' },
            { key: 'bookEdition', label: 'Edition name' },
            { key: 'meta.authorName', label: 'Author shown in book details' },
            { key: 'meta.publisherName', label: 'Publisher shown in book details' },
            { key: 'meta.genreName', label: 'Book genre' },
            { key: 'meta.languageName', label: 'Book language' },
            { key: 'poemTag', label: 'Poem label' },
            { key: 'poemLines', label: 'Poem excerpt lines', multi: true },
            { key: 'poemCite', label: 'Poem attribution' },
            { key: 'order', label: 'Order button label' },
        ],
    },
    {
        id: 'contact',
        label: 'Contact',
        fields: [
            { key: 'contactLabel', label: 'Section label' },
            { key: 'contactTitle', label: 'Contact title' },
            { key: 'contactText', label: 'Contact intro' },
            { key: 'formName', label: 'Name field label' },
            { key: 'formEmail', label: 'Email field label' },
            { key: 'formSubject', label: 'Subject field label' },
            { key: 'formMessage', label: 'Message field label' },
            { key: 'formSend', label: 'Send button label' },
            { key: 'note', label: 'Footer note' },
            { key: 'mail', label: 'Mail address' },
            { key: 'footerBrand', label: 'Footer author name' },
            { key: 'footerRole', label: 'Footer author role' },
            { key: 'copyright', label: 'Copyright text' },
        ],
    },
];

function AdminEditor({ content, onUpdate, onSave, onClose }) {
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [saving, setSaving] = useState(false);

    const updateField = (language, field, value) => {
        const path = field.split('.');
        onUpdate((current) => ({
            ...current,
            [language]: {
                ...current[language],
                ...(path.length === 1 ? { [field]: value } : {
                    [path[0]]: { ...current[language][path[0]], [path[1]]: value },
                }),
            },
        }));
    };

    const readField = (language, field) => field.split('.').reduce((value, key) => value?.[key], content[language]);

    const updateMultilineField = (language, field, value) => {
        updateField(language, field, value.split('\n---\n'));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoginError('');
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Sign-in failed.');
            setPassword('');
            setAuthenticated(true);
        } catch (error) {
            setLoginError(error.message || 'Could not reach the editor API.');
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            const response = await fetch('/api/admin/content', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Could not save content.');
            setMessage('Content saved to MongoDB.');
            onSave?.(result.content);
        } catch (error) {
            setMessage(error.message || 'Could not reach the editor API.');
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = async () => {
        await fetch('/api/admin/logout', { method: 'POST' }).catch(() => { });
        setAuthenticated(false);
    };

    if (!authenticated) {
        return (
            <div className="admin-shell">
                <form className="admin-login" onSubmit={handleLogin}>
                    <span className="section-kicker">Author access</span>
                    <h2>Website editor</h2>
                    <p>Sign in to update the website in English and French.</p>
                    <label className="admin-field">
                        <span>Admin password</span>
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
                    </label>
                    {loginError && <p className="admin-error" role="alert">{loginError}</p>}
                    <button type="submit" className="save-button">Sign in</button>
                    <a href="/" className="admin-link">Back to site</a>
                </form>
            </div>
        );
    }

    return (
        <div className="admin-shell">
            <div className="admin-topbar">
                <div>
                    <span className="section-kicker">Editor</span>
                    <h2>Website content</h2>
                </div>
                <div className="admin-actions">
                    <a href="/" className="admin-link" onClick={(event) => { event.preventDefault(); onClose?.(); }}>Back to site</a>
                    <button type="button" className="admin-link" onClick={handleLogout}>Sign out</button>
                    <button type="button" className="save-button" onClick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save content'}</button>
                </div>
            </div>

            {message && <div className="save-message">{message}</div>}

            <div className="admin-panels">
                {editorSections.map((section) => (
                    <section className="admin-panel" key={section.id}>
                        <h3>{section.label}</h3>
                        {section.fields.map((field) => (
                            <div className="admin-field" key={field.key}>
                                <label>{field.label}</label>
                                {['en', 'fr'].map((language) => (
                                    <div className="admin-language-field" key={language}>
                                        <span>{language === 'en' ? 'English' : 'Français'}</span>
                                        {field.multi ? (
                                            <textarea
                                                aria-label={`${field.label} — ${language}`}
                                                value={(readField(language, field.key) || []).join('\n---\n')}
                                                onChange={(event) => updateMultilineField(language, field.key, event.target.value)}
                                                rows={6}
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                aria-label={`${field.label} — ${language}`}
                                                value={readField(language, field.key) ?? ''}
                                                onChange={(event) => updateField(language, field.key, event.target.value)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState('en');
    const [pagePath, setPagePath] = useState(() => window.location.pathname);
    const [content, setContent] = useState(translations);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        const updatePath = () => setPagePath(window.location.pathname);
        window.addEventListener('popstate', updatePath);
        return () => window.removeEventListener('popstate', updatePath);
    }, []);

    useEffect(() => {
        fetch('/api/content')
            .then((response) => {
                if (!response.ok) throw new Error('Content API unavailable');
                return response.json();
            })
            .then(({ content: savedContent }) => {
                if (savedContent) setContent(mergeContent(translations, savedContent));
            })
            .catch(() => {
                // Keep built-in copy visible if the API is unavailable during local development.
            });
    }, []);

    const t = content[lang];
    const navItems = t.nav;

    if (pagePath === '/admin/editor') {
        return <AdminEditor content={content} onUpdate={setContent} onSave={(saved) => setContent(mergeContent(translations, saved))} onClose={() => { window.history.pushState({}, '', '/'); setPagePath('/'); }} />;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const recipient = t.mail;
        const subject = encodeURIComponent(formData.subject || 'Contact request');
        const body = encodeURIComponent(
            `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\n\nMessage:\n${formData.message || ''}`
        );

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <>
            <header className="site-header">
                <div className="topbar container">
                    <a href="#" className="brand-block" aria-label="Farah Tilmatine Accueil" onClick={() => setMenuOpen(false)}>
                        <div className="brand-name">{t.brand}</div>
                        <div className="brand-sub">{t.role}</div>
                    </a>

                    <div className="nav-shell">
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

                    <div className="nav-actions">
                        <button
                            type="button"
                            className="language-switch"
                            onClick={() => setLang((current) => (current === 'en' ? 'fr' : 'en'))}
                            aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
                            title={lang === 'en' ? 'Switch to French' : 'Switch to English'}
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 12 2.5Zm6.8 9.5h-3.09A15.52 15.52 0 0 0 13.7 5.7a7.92 7.92 0 0 1 5.1 6.3ZM12 4.12a13.75 13.75 0 0 1 1.9 8.38H10.1A13.75 13.75 0 0 1 12 4.12ZM5.2 12h3.09A15.52 15.52 0 0 0 10.3 18.3a7.92 7.92 0 0 1-5.1-6.3Zm1.9 7.88A13.75 13.75 0 0 1 9 12H11.9a13.75 13.75 0 0 1-1.9 8.38Zm8.9 0A13.75 13.75 0 0 1 15 12h2.9a13.75 13.75 0 0 1-1.9 8.38ZM18.8 12a7.92 7.92 0 0 1-5.1 6.3 15.52 15.52 0 0 0 1.1-6.3h3.09ZM5.2 12a7.92 7.92 0 0 1 5.1-6.3A15.52 15.52 0 0 0 9.2 12H5.2Zm3.1-7.38A15.52 15.52 0 0 0 10.3 12H7.2A7.92 7.92 0 0 1 8.3 4.62Zm7.4 14.76A15.52 15.52 0 0 0 13.7 12h3.1a7.92 7.92 0 0 1-1.1 7.38Z" fill="currentColor" />
                            </svg>
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
                    </div>

                    <div
                        className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(false)}
                        aria-hidden="true"
                    />
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
                                <img src={bookImage} alt="Présentation complète du recueil Cinq ans d'hiver" />
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

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="field-grid">
                                <label className="field">
                                    <span>{t.formName}</span>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                </label>
                                <label className="field">
                                    <span>{t.formEmail}</span>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </label>
                            </div>

                            <div className="field-grid">
                                <label className="field full-width">
                                    <span>{t.formSubject}</span>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                                </label>
                            </div>

                            <label className="field">
                                <span>{t.formMessage}</span>
                                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
                            </label>

                            <div className="form-actions">
                                <button type="submit" className="submit-button">{t.formSend}</button>
                            </div>
                        </form>

                        <a href={`mailto:${t.mail}`} className="mail-link">
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

                </div>
            </footer>
        </>
    );
}

export default App;
