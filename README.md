# プロダクト名 : インドアスタイリスト
<hr>

# チーム名 : UNO

[スプリントバッグログ#0のURL](https://miro.com/app/board/uXjVMiXFsC0=/?moveToWidget=3458764564806753986&cot=14)  
[スプリントバッグログ#1のURL]()

スプリントバッグログ#1以降は順次追加する

# アプリのURL
[IndoorStylist](https://indoorstylist.onrender.com/)


# IndoorStylistの確認方法(local)
1. `git clone git@github.com:215725A/IndoorStylist.git`
2. `cd IndoorStylist/`
3. `python3 -m venv venv`
4. `source ./venv/bin/activate`
5. `pip install --upgrade pip`
6. `pip install -r requirements.txt`
7. `python server.py` or `gunicorn -w 1 IndoorStylistApp:app`

## 注意
このFlaskはPython3.11で動かしているためPythonのバージョンが異なるとローカルでうまく動作しない可能性があります。
