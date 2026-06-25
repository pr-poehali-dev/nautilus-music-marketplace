import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const LOGO = 'https://cdn.poehali.dev/projects/f97c9f9e-ca33-4843-a9e7-4fd7ab93dc79/files/0284eae5-3ec4-4980-818d-383e42289235.jpg';

const navLinks = ['Каталог битов', 'Жанры', 'Продюсеры', 'Лицензии', 'Личный кабинет'];

const genres = [
  { name: 'Trap', icon: 'Zap', count: '2 480' },
  { name: 'Drill', icon: 'Flame', count: '1 320' },
  { name: 'R&B', icon: 'Heart', count: '960' },
  { name: 'Pop', icon: 'Sparkles', count: '1 740' },
  { name: 'Afrobeat', icon: 'Sun', count: '680' },
  { name: 'Phonk', icon: 'Skull', count: '1 150' },
];

const beats = [
  { title: 'Midnight Drive', producer: 'WAVEKING', bpm: 140, key: 'C# min', price: 29, tag: 'Trap', color: 'from-[#6E44FF] to-[#8B5CF6]' },
  { title: 'Velvet Rain', producer: 'LUNA', bpm: 90, key: 'F maj', price: 35, tag: 'R&B', color: 'from-[#8B5CF6] to-[#A78BFA]' },
  { title: 'Phantom', producer: 'NOIRE', bpm: 160, key: 'G min', price: 24, tag: 'Drill', color: 'from-[#A78BFA] to-[#6E44FF]' },
  { title: 'Golden Hour', producer: 'SOLAR', bpm: 102, key: 'A maj', price: 39, tag: 'Pop', color: 'from-[#6E44FF] to-[#C4B5FD]' },
  { title: 'Lagos Nights', producer: 'KOFI', bpm: 108, key: 'D min', price: 32, tag: 'Afrobeat', color: 'from-[#8B5CF6] to-[#6E44FF]' },
  { title: 'Ghost Mode', producer: 'VØID', bpm: 145, key: 'E min', price: 27, tag: 'Phonk', color: 'from-[#A78BFA] to-[#8B5CF6]' },
];

const producers = [
  { name: 'WAVEKING', sales: '12.4K', avatar: 'W' },
  { name: 'LUNA', sales: '9.8K', avatar: 'L' },
  { name: 'NOIRE', sales: '8.1K', avatar: 'N' },
  { name: 'SOLAR', sales: '7.3K', avatar: 'S' },
];

const licenses = [
  { name: 'MP3 Lease', price: 29, format: 'MP3 320kbps', streams: '100K', use: 'Демо и стриминг', highlight: false, perks: ['Файл MP3', 'До 100K стримов', 'Нелицензионное распространение', 'Кредит продюсеру'] },
  { name: 'WAV Lease', price: 59, format: 'WAV + MP3', streams: '500K', use: 'Релизы и клипы', highlight: true, perks: ['Файлы WAV + MP3', 'До 500K стримов', '1 музыкальный клип', 'Радио до 2 станций'] },
  { name: 'Premium', price: 129, format: 'WAV + Trackout', streams: '∞', use: 'Коммерция без лимита', highlight: false, perks: ['Дорожки Trackout (stems)', 'Безлимит стримов', 'Безлимит клипов', 'Радио без ограничений'] },
  { name: 'Exclusive', price: 899, format: 'Все файлы + права', streams: '∞', use: 'Полные права на бит', highlight: false, perks: ['Эксклюзивные права', 'Бит снимается с продажи', 'Все исходники', 'Без отчислений'] },
];

const recommended = [
  { title: 'Neon Pulse', producer: 'WAVEKING', bpm: 138, color: 'from-[#6E44FF] to-[#8B5CF6]' },
  { title: 'Silk', producer: 'LUNA', bpm: 92, color: 'from-[#8B5CF6] to-[#A78BFA]' },
  { title: 'Shadow Run', producer: 'NOIRE', bpm: 158, color: 'from-[#A78BFA] to-[#6E44FF]' },
];

const Index = () => {
  const [playing, setPlaying] = useState<number | null>(0);
  const [wave, setWave] = useState(false);

  return (
    <div className="min-h-screen text-foreground font-body overflow-x-hidden pb-28">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="glass-strong mx-auto mt-4 max-w-[1320px] rounded-[28px] px-5 py-3 flex items-center gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <img src={LOGO} alt="Nautilus" className="w-10 h-10 rounded-2xl object-cover glow-violet" />
            <span className="font-display font-extrabold text-xl tracking-tight hidden sm:block">NAUTILUS</span>
          </div>
          <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l} href="#" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-white/5 transition-colors">{l}</a>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 glass rounded-2xl px-4 py-2 w-56">
              <Icon name="Search" size={18} className="text-muted-foreground" />
              <input placeholder="Поиск битов..." className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground" />
            </div>
            <Button className="rounded-2xl bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:opacity-90 font-semibold">
              <Icon name="User" size={18} /> Войти
            </Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-44 pb-24 px-6">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6E44FF]/20 rounded-full blur-[140px] animate-glow pointer-events-none" />
        <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-neon-light mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-violet animate-glow" /> 12 480 битов в каталоге
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Найди бит <br /> для своего <span className="text-gradient">хита</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Премиальный маркетплейс битов с гибкой системой лицензий — от демо до полных эксклюзивных прав.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-2xl h-14 px-8 text-base bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:opacity-90 font-semibold glow-violet">
                <Icon name="ShoppingBag" size={20} /> Купить бит
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-base glass border-neon-purple/30 hover:bg-white/5 font-semibold">
                <Icon name="Upload" size={20} /> Загрузить бит
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div><span className="block font-display font-bold text-2xl text-foreground">2.4K</span>продюсеров</div>
              <div className="w-px h-10 bg-border" />
              <div><span className="block font-display font-bold text-2xl text-foreground">48K</span>проданных битов</div>
              <div className="w-px h-10 bg-border" />
              <div><span className="block font-display font-bold text-2xl text-foreground">4.9★</span>рейтинг</div>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="absolute inset-0 bg-[#8B5CF6]/25 rounded-full blur-[120px] animate-glow" />

            {/* ЕДИНЫЙ БЛОК: ракушка + моя волна */}
            <div className="relative glass-strong rounded-[36px] overflow-hidden animate-float glow-violet w-[380px]">
              {/* Ракушка */}
              <img src={LOGO} alt="Nautilus logo" className="w-full aspect-square object-cover" />

              {/* Оверлей-градиент снизу */}
              <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0B0B14] via-[#0B0B14]/80 to-transparent" />

              {/* Моя волна — поверх ракушки снизу */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <button
                    onClick={() => setWave(!wave)}
                    className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6E44FF] to-[#8B5CF6] flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
                  >
                    <Icon name={wave ? 'Pause' : 'Play'} size={22} />
                    {wave && <span className="absolute -inset-1 rounded-2xl border-2 border-neon-light/40 animate-glow" />}
                  </button>
                  <div className="min-w-0 flex-1">
                    <div className="font-display font-bold text-base leading-tight">Моя волна</div>
                    <div className="text-xs text-muted-foreground">Биты, подобранные под тебя</div>
                  </div>
                  <div className="flex items-end gap-0.5 h-6 shrink-0">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className={`w-1 rounded-full bg-gradient-to-t from-[#6E44FF] to-[#A78BFA] transition-all duration-300 ${wave ? 'animate-equalize' : ''}`}
                        style={{ height: wave ? '100%' : '30%', animationDelay: `${bar * 0.13}s` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  {recommended.map((r, i) => (
                    <button
                      key={r.title}
                      onClick={() => setWave(true)}
                      className={`w-full flex items-center gap-3 rounded-2xl px-2 py-1.5 text-left transition-colors ${wave && i === 0 ? 'bg-white/15' : 'hover:bg-white/8'}`}
                    >
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center shrink-0`}>
                        <Icon name="Music" size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold truncate">{r.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{r.producer} · {r.bpm} BPM</div>
                      </div>
                      {wave && i === 0 && (
                        <div className="flex items-end gap-0.5 h-4 shrink-0">
                          {[0, 1, 2].map((b) => (
                            <span key={b} className="w-0.5 bg-neon-light rounded-full animate-equalize" style={{ height: '100%', animationDelay: `${b * 0.15}s` }} />
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GENRES */}
      <section className="px-6 max-w-[1320px] mx-auto">
        <div className="flex items-end justify-between mb-7">
          <h2 className="font-display font-extrabold text-3xl">Категории</h2>
          <a href="#" className="text-sm text-neon-light hover:underline">Все жанры →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((g) => (
            <button key={g.name} className="glass hover-lift rounded-[24px] p-5 text-left group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6E44FF] to-[#8B5CF6] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon name={g.icon} size={22} />
              </div>
              <div className="font-display font-bold text-lg">{g.name}</div>
              <div className="text-sm text-muted-foreground">{g.count} битов</div>
            </button>
          ))}
        </div>
      </section>

      {/* POPULAR BEATS */}
      <section className="px-6 max-w-[1320px] mx-auto mt-20">
        <div className="flex items-end justify-between mb-7">
          <h2 className="font-display font-extrabold text-3xl">Популярные биты</h2>
          <a href="#" className="text-sm text-neon-light hover:underline">Весь каталог →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beats.map((b, i) => (
            <div key={b.title} className="glass hover-lift rounded-[24px] p-4 group">
              <div className={`relative aspect-square rounded-[18px] bg-gradient-to-br ${b.color} overflow-hidden mb-4`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Icon name="AudioWaveform" size={80} />
                </div>
                <span className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-xs font-semibold">{b.tag}</span>
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="absolute bottom-3 right-3 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon name={playing === i ? 'Pause' : 'Play'} size={20} />
                </button>
                {playing === i && (
                  <div className="absolute bottom-4 left-4 flex items-end gap-1 h-6">
                    {[0, 1, 2, 3, 4].map((bar) => (
                      <span key={bar} className="w-1 bg-white rounded-full animate-equalize" style={{ height: '100%', animationDelay: `${bar * 0.12}s` }} />
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-display font-bold text-lg leading-tight">{b.title}</div>
                  <div className="text-sm text-muted-foreground">{b.producer}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-display font-bold text-lg text-neon-light">${b.price}</div>
                  <div className="text-xs text-muted-foreground">от</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Icon name="Activity" size={14} /> {b.bpm} BPM</span>
                <span className="flex items-center gap-1"><Icon name="Music" size={14} /> {b.key}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LICENSES */}
      <section className="px-6 max-w-[1320px] mx-auto mt-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-neon-light mb-4">
            <Icon name="ShieldCheck" size={16} /> Гибкие лицензии
          </div>
          <h2 className="font-display font-extrabold text-4xl">Лицензия под любую задачу</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">От демо-записи до полных эксклюзивных прав — выбери условия использования, которые подходят твоему проекту.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {licenses.map((lic) => (
            <div
              key={lic.name}
              className={`relative rounded-[28px] p-6 hover-lift ${lic.highlight ? 'bg-gradient-to-b from-[#6E44FF]/25 to-[#8B5CF6]/10 border border-neon-purple/40 glow-violet' : 'glass'}`}
            >
              {lic.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] text-white text-xs font-semibold px-4 py-1 rounded-full">Популярный</span>
              )}
              <div className="font-display font-bold text-xl">{lic.name}</div>
              <div className="text-sm text-muted-foreground mb-4">{lic.use}</div>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="font-display font-black text-4xl">${lic.price}</span>
              </div>
              <div className="flex gap-2 mb-5">
                <span className="glass rounded-xl px-2.5 py-1 text-xs">{lic.format}</span>
                <span className="glass rounded-xl px-2.5 py-1 text-xs">{lic.streams} стримов</span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {lic.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Icon name="Check" size={16} className="text-neon-light mt-0.5 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
              <Button className={`w-full rounded-2xl font-semibold ${lic.highlight ? 'bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:opacity-90' : 'glass border-neon-purple/30 hover:bg-white/5'}`} variant={lic.highlight ? 'default' : 'outline'}>
                Выбрать
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PRODUCERS */}
      <section className="px-6 max-w-[1320px] mx-auto mt-24">
        <div className="flex items-end justify-between mb-7">
          <h2 className="font-display font-extrabold text-3xl">Топ-продюсеры</h2>
          <a href="#" className="text-sm text-neon-light hover:underline">Все продюсеры →</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {producers.map((p, i) => (
            <div key={p.name} className="glass hover-lift rounded-[24px] p-6 flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6E44FF] to-[#8B5CF6] flex items-center justify-center font-display font-black text-2xl glow-violet">
                  {p.avatar}
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full glass-strong flex items-center justify-center text-xs font-bold text-neon-light">#{i + 1}</span>
              </div>
              <div className="font-display font-bold text-lg mt-4">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.sales} продаж</div>
              <Button variant="outline" className="mt-4 rounded-2xl glass border-neon-purple/30 hover:bg-white/5 w-full">Профиль</Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 max-w-[1320px] mx-auto mt-24">
        <div className="relative overflow-hidden rounded-[36px] glass-strong p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6E44FF]/20 to-[#8B5CF6]/20" />
          <div className="relative">
            <h2 className="font-display font-black text-4xl md:text-5xl">Готов выпустить свой хит?</h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Присоединяйся к тысячам артистов и продюсеров на NAUTILUS.</p>
            <Button size="lg" className="mt-8 rounded-2xl h-14 px-10 text-base bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:opacity-90 font-semibold glow-violet">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </section>

      <footer className="px-6 max-w-[1320px] mx-auto mt-20 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={LOGO} alt="" className="w-8 h-8 rounded-xl object-cover" />
          <span className="font-display font-extrabold text-lg text-foreground">NAUTILUS</span>
        </div>
        © 2026 NAUTILUS — маркетплейс музыкальных битов
      </footer>

      {/* PLAYER */}
      <div className="fixed bottom-0 inset-x-0 z-50 px-4 pb-4">
        <div className="glass-strong mx-auto max-w-[1320px] rounded-[24px] px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-3 min-w-0 w-56">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${beats[playing ?? 0].color} flex items-center justify-center shrink-0`}>
              <Icon name="Music" size={20} />
            </div>
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate">{beats[playing ?? 0].title}</div>
              <div className="text-xs text-muted-foreground truncate">{beats[playing ?? 0].producer}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground transition-colors"><Icon name="SkipBack" size={20} /></button>
            <button
              onClick={() => setPlaying(playing === null ? 0 : null)}
              className="w-11 h-11 rounded-full bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] flex items-center justify-center hover:scale-105 transition-transform"
            >
              <Icon name={playing !== null ? 'Pause' : 'Play'} size={20} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors"><Icon name="SkipForward" size={20} /></button>
          </div>
          <div className="flex-1 hidden md:flex items-center gap-3">
            <span className="text-xs text-muted-foreground">1:12</span>
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-[#6E44FF] to-[#A78BFA] rounded-full" />
            </div>
            <span className="text-xs text-muted-foreground">3:24</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Icon name="Volume2" size={20} className="text-muted-foreground hidden sm:block" />
            <Button className="rounded-2xl bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:opacity-90 font-semibold hidden sm:flex">
              <Icon name="ShoppingBag" size={18} /> ${beats[playing ?? 0].price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;