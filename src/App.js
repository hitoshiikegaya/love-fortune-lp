import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Moon, Sun, ChevronDown, Users, Award, Zap } from 'lucide-react';

const LoveFortuneLP = () => {
  const [fortune, setFortune] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [todaysDate, setTodaysDate] = useState('');
  const [showFortune, setShowFortune] = useState(false);
  const [userCount, setUserCount] = useState(0);

  // 恋愛運のレベル
  const fortuneLevels = [
    { level: 5, name: '最高', color: 'text-pink-500', bgColor: 'bg-pink-100', icon: '💕' },
    { level: 4, name: '良好', color: 'text-red-500', bgColor: 'bg-red-100', icon: '❤️' },
    { level: 3, name: '普通', color: 'text-yellow-500', bgColor: 'bg-yellow-100', icon: '💛' },
    { level: 2, name: '注意', color: 'text-blue-500', bgColor: 'bg-blue-100', icon: '💙' },
    { level: 1, name: '低調', color: 'text-gray-500', bgColor: 'bg-gray-100', icon: '🤍' }
  ];

  // アドバイス集
  const adviceList = [
    "素直な気持ちを大切にしましょう",
    "相手の話をよく聞くことが大切です",
    "自分磨きに時間をかけてみて",
    "新しい出会いにオープンでいましょう",
    "感謝の気持ちを伝えることを忘れずに",
    "自分らしさを大切にしてください",
    "小さな変化が大きな幸せを運びます",
    "相手への思いやりを忘れずに",
    "今日は特別な日になりそうです",
    "コミュニケーションを大切にしましょう",
    "直感を信じて行動してみて",
    "笑顔が幸運を引き寄せます"
  ];

  // ラッキーアイテム集
  const luckyItems = [
    "ピンクの小物", "ハート型のアクセサリー", "お気に入りの香水", "可愛いハンカチ",
    "赤いリップ", "花柄のアイテム", "キラキラした装飾品", "お守り",
    "写真", "手紙", "チョコレート", "温かい飲み物"
  ];

  // ラッキーカラー集
  const luckyColors = [
    "ピンク", "赤", "白", "パステルブルー", "ラベンダー", 
    "ゴールド", "シルバー", "クリーム", "桜色", "コーラル"
  ];

  // 体験談データ
  const testimonials = [
    {
      name: "さくら さん",
      age: "25歳",
      text: "毎朝この占いをチェックするのが日課になりました！アドバイス通りにしたら素敵な出会いがありました✨",
      rating: 5
    },
    {
      name: "みお さん",
      age: "28歳", 
      text: "占い結果がとても当たっていてびっくり！彼との関係も順調に進んでいます💕",
      rating: 5
    },
    {
      name: "あやか さん",
      age: "23歳",
      text: "ラッキーアイテムを身につけるようになってから、本当に恋愛運が上がった気がします！",
      rating: 4
    }
  ];

  useEffect(() => {
    const today = new Date();
    setTodaysDate(today.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }));

    // ユーザー数カウントアップアニメーション
    const targetCount = 128546;
    let currentCount = 0;
    const increment = targetCount / 100;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setUserCount(targetCount);
        clearInterval(timer);
      } else {
        setUserCount(Math.floor(currentCount));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const generateFortune = async () => {
    setIsLoading(true);
    
    // ローディング演出
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const randomLevel = fortuneLevels[Math.floor(Math.random() * fortuneLevels.length)];
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    const randomItem = luckyItems[Math.floor(Math.random() * luckyItems.length)];
    const randomColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
    
    setFortune({
      level: randomLevel,
      advice: randomAdvice,
      luckyItem: randomItem,
      luckyColor: randomColor,
      percentage: Math.floor(Math.random() * 30) + 70 + (randomLevel.level * 5)
    });
    
    setIsLoading(false);
    setShowFortune(true);
  };

  const scrollToFortune = () => {
    document.getElementById('fortune-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const resetFortune = () => {
    setFortune(null);
    setShowFortune(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-purple-50">
      
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-red-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-200 rounded-full opacity-50 animate-pulse delay-700"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* メインタイトル */}
          <div className="mb-8">
            <div className="flex justify-center items-center mb-6">
              <Heart className="text-pink-500 mr-3 animate-pulse" size={48} />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                恋愛運占い
              </h1>
              <Heart className="text-pink-500 ml-3 animate-pulse" size={48} />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4">
              あなたの今日の恋愛運を無料で占います
            </p>
            <p className="text-gray-500 text-lg">
              {todaysDate}
            </p>
          </div>

          {/* 統計情報 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Users className="text-pink-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-gray-800">{userCount.toLocaleString()}</div>
              <div className="text-sm text-gray-600">累計利用者数</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Award className="text-purple-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-gray-800">94.2%</div>
              <div className="text-sm text-gray-600">満足度</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Zap className="text-yellow-500 mx-auto mb-2" size={32} />
              <div className="text-2xl font-bold text-gray-800">無料</div>
              <div className="text-sm text-gray-600">完全無料</div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-4">
            <button
              onClick={scrollToFortune}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:from-pink-600 hover:via-red-600 hover:to-purple-700 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              <Sparkles className="inline mr-3" size={24} />
              今すぐ無料で占う
              <Sparkles className="inline ml-3" size={24} />
            </button>
            <p className="text-sm text-gray-500">登録不要・完全無料</p>
          </div>

          {/* スクロール促進 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            なぜ多くの人に選ばれるのか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="text-pink-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">高精度な占い</h3>
              <p className="text-gray-600">独自のアルゴリズムであなたの恋愛運を正確に分析します</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Zap className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">即座に結果表示</h3>
              <p className="text-gray-600">わずか数秒で今日の恋愛運とアドバイスを確認できます</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">毎日新しい結果</h3>
              <p className="text-gray-600">日替わりで変わる占い結果で毎日新鮮な気持ちに</p>
            </div>
          </div>
        </div>
      </section>

      {/* 占いセクション */}
      <section id="fortune-section" className="py-20 px-4 bg-white/50">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {!showFortune && !isLoading && (
              <div className="text-center py-8">
                <div className="mb-8">
                  <div className="flex justify-center space-x-3 mb-6">
                    <Star className="text-yellow-400 animate-pulse" size={32} />
                    <Sparkles className="text-pink-400 animate-pulse" size={32} />
                    <Moon className="text-purple-400 animate-pulse" size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    あなたの今日の恋愛運は？
                  </h2>
                  <p className="text-gray-600 mb-8">
                    ボタンを押して運勢をチェックしましょう！<br/>
                    今日のアドバイスとラッキーアイテムも一緒にお届けします。
                  </p>
                </div>
                <button
                  onClick={generateFortune}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-6 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
                >
                  <Sparkles className="inline mr-3" size={24} />
                  今すぐ占う
                  <Sparkles className="inline ml-3" size={24} />
                </button>
              </div>
            )}

            {isLoading && (
              <div className="text-center py-16">
                <div className="relative mb-8">
                  <div className="animate-spin rounded-full h-20 w-20 border-4 border-pink-200 border-t-pink-500 mx-auto"></div>
                  <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-400" size={32} />
                </div>
                <p className="text-gray-600 animate-pulse text-lg">あなたの恋愛運を占っています...</p>
                <p className="text-gray-500 text-sm mt-2">少々お待ちください</p>
              </div>
            )}

            {fortune && showFortune && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">占い結果</h3>
                
                {/* 運勢レベル */}
                <div className={`${fortune.level.bgColor} rounded-2xl p-8 mb-8`}>
                  <div className="text-6xl mb-4">{fortune.level.icon}</div>
                  <h4 className={`text-3xl font-bold ${fortune.level.color} mb-3`}>
                    {fortune.level.name}
                  </h4>
                  <div className="text-4xl font-bold text-gray-700">
                    {fortune.percentage}%
                  </div>
                </div>

                {/* アドバイス */}
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
                  <h5 className="font-bold text-gray-700 mb-3 flex items-center justify-center text-lg">
                    <Sun className="mr-2 text-yellow-500" size={24} />
                    今日のアドバイス
                  </h5>
                  <p className="text-gray-600 text-lg leading-relaxed">{fortune.advice}</p>
                </div>

                {/* ラッキーアイテム & カラー */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-yellow-50 rounded-xl p-4">
                    <h6 className="font-bold text-yellow-700 mb-2">ラッキーアイテム</h6>
                    <p className="text-yellow-600">{fortune.luckyItem}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <h6 className="font-bold text-purple-700 mb-2">ラッキーカラー</h6>
                    <p className="text-purple-600">{fortune.luckyColor}</p>
                  </div>
                </div>

                {/* リセットボタン */}
                <button
                  onClick={resetFortune}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-4 px-8 rounded-full transition-colors duration-200"
                >
                  もう一度占う
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 体験談セクション */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            利用者の声
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.age}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Heart className="mr-3" size={32} />
            <h3 className="text-2xl font-bold">恋愛運占い</h3>
            <Heart className="ml-3" size={32} />
          </div>
          <p className="mb-6 text-lg">
            毎日の恋愛運をチェックして、素敵な恋愛を引き寄せましょう✨
          </p>
          <div className="text-sm opacity-80">
            <p>© 2025 恋愛運占い. All rights reserved.</p>
            <p className="mt-2">あなたの恋愛を応援しています 💕</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoveFortuneLP;
