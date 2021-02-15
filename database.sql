CREATE DATABASE rezu;

CREATE TABLE reviews(
  review_id SERIAL PRIMARY KEY, username VARCHAR(40), product_name VARCHAR(50), product_image VARCHAR(400), review VARCHAR(1000)
);

INSERT INTO reviews (username, product_name, product_image, review) VALUES ('John1234', 'Oculus Quest 2', 'https://gamecrate.com/sites/default/files/Oculus%202%20Headset.png', 'The Oculus Quest 2 is so much better than the original. The resoluation is 10 times better, the screen door effect is not noticable at all, and the headset is way more comfortable which is great for long sessions. The only negative is that the charging cable is very short so if you want to play while the device charges, you have to plug the headset charger into an extention cord.');
