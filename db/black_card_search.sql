select black_cards.text, black_cards.draw, black_cards.pick, black_cards.watermark from black_cards
left join card_set_black_card
on card_set_black_card.black_card_id = black_cards.id
left join card_set
on card_set_black_card.card_set_id = card_set.id
where card_set.id = 100051