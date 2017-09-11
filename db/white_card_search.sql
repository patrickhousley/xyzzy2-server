select white_cards.text, white_cards.watermark from white_cards
left join card_set_white_card
on card_set_white_card.white_card_id = white_cards.id
left join card_set
on card_set_white_card.card_set_id = card_set.id
where card_set.id = 100051