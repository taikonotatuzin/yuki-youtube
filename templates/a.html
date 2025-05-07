import time
import random

def generate_html_output(user_activities):
    """
    ユーザーごとの再生記録データから、
    直近1時間以内に再生された記録があるユーザーをランダムに選び、
    その中のランダムな最大20件の記録を指定の HTML 構造で出力する関数
    
    :param user_activities: dict
        ユーザーIDをキー、その再生記録のリストを値とする辞書
        各記録は、{'url': str, 'title': str, 'thumbnail': str (任意), 'timestamp': int (ms)} の形式
    :return: str
        生成したHTML文字列。直近1時間以内に再生された記録がない場合はその旨を表示するHTMLを返す。
    """
    # 現在の時刻（ミリ秒）と直近1時間前のタイムスタンプを計算
    current_time_ms = int(time.time() * 1000)
    one_hour_ago = current_time_ms - (60 * 60 * 1000)
    
    # 直近1時間以内の記録があるユーザーのみを選出
    eligible_user_ids = [
        user_id for user_id, records in user_activities.items()
        if any(record['timestamp'] >= one_hour_ago for record in records)
    ]
    
    if not eligible_user_ids:
        return "<p>直近1時間以内に再生された記録はありません。</p>"
    
    # 条件を満たすユーザーの中からランダムに1人選ぶ
    random_user_id = random.choice(eligible_user_ids)
    
    # 選ばれたユーザーの直近1時間以内の記録を抽出
    recent_items = [
        record for record in user_activities[random_user_id]
        if record['timestamp'] >= one_hour_ago
    ]
    
    # ランダムに並び替え（shuffle）
    random.shuffle(recent_items)
    
    # 最大20件の記録を選択
    selected_items = recent_items[:20]
    
    # 各アイテムのHTMLを生成（thumbnail がなければプレースホルダー画像を使用）
    html_output = ""
    for item in selected_items:
        thumbnail = item.get("thumbnail") or "https://via.placeholder.com/210x118"
        html_output += f'''
        <div class="h-box">
            <a href="{item['url']}">
                <center>
                    <img loading="lazy" tabindex="-1" style="width:56.25%" src="{thumbnail}">
                </center>
                <p dir="auto">{item['title']}</p>
            </a>
        </div>


# HTML出力の生成例
html_result = generate_html_output(user_activities)
print(html_result)
