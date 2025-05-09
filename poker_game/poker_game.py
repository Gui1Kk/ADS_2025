import pygame
import random
import os

# Inicializa o Pygame
pygame.init()

# Configurações da janela
WIDTH, HEIGHT = 1280, 720
win = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Poker Texas Hold'em")

# Cores
GREEN = (34, 139, 34)
WHITE = (255, 255, 255)

# Carregamento das cartas
CARD_WIDTH, CARD_HEIGHT = 100, 145
CARD_BACK = pygame.transform.scale(pygame.image.load(r"C:\Users\2025103070005\Documents\Semestre 1\poker_game\cards\back.png"), (CARD_WIDTH, CARD_HEIGHT))


def load_card_images(path=r"C:\Users\2025103070005\Documents\Semestre 1\poker_game\cards"):
    suits = ['C', 'D', 'H', 'S']  # Clubs, Diamonds, Hearts, Spades
    ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    images = {}
    for suit in suits:
        for rank in ranks:
            key = f"{rank}{suit}"
            file_path = os.path.join(path, f"{rank}{suit}.png")
            image = pygame.transform.scale(pygame.image.load(file_path), (CARD_WIDTH, CARD_HEIGHT))
            images[key] = image
    return images

CARD_IMAGES = load_card_images()

# Classes do jogo
class Card:
    def __init__(self, rank, suit):
        self.rank = rank
        self.suit = suit
        self.image = CARD_IMAGES[f"{rank}{suit}"]

    def draw(self, surface, x, y):
        surface.blit(self.image, (x, y))

class Deck:
    def __init__(self):
        suits = ['C', 'D', 'H', 'S']
        ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        self.cards = [Card(rank, suit) for suit in suits for rank in ranks]
        random.shuffle(self.cards)

    def deal(self, n):
        return [self.cards.pop() for _ in range(n)]

# Jogador
class Player:
    def __init__(self, name):
        self.name = name
        self.hand = []

    def draw_hand(self, surface, x, y):
        for i, card in enumerate(self.hand):
            card.draw(surface, x + i * (CARD_WIDTH + 10), y)

# Função principal
def main():
    run = True
    clock = pygame.time.Clock()
    FPS = 60

    # Inicializa o baralho e os jogadores
    deck = Deck()
    player = Player("Jogador 1")
    dealer = Player("Dealer")
    table_cards = []

    # Lida cartas iniciais
    player.hand = deck.deal(2)
    dealer.hand = deck.deal(2)
    table_cards = deck.deal(5)

    anim_index = 0
    animation_speed = 10
    cards_to_animate = player.hand + dealer.hand + table_cards

    # Loop do jogo
    while run:
        clock.tick(FPS)
        win.fill(GREEN)

        # Eventos
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

        # Animação: revela cartas uma por uma
        if anim_index < len(cards_to_animate):
            current_card = cards_to_animate[anim_index]
            pygame.draw.rect(win, GREEN, (0, 0, WIDTH, HEIGHT))
            for i in range(anim_index):
                cards_to_animate[i].draw(win, 100 + i * 110, 300)
            win.blit(CARD_BACK, (100 + anim_index * 110, 300))
            anim_index += 1 if pygame.time.get_ticks() % (FPS * 0.5) == 0 else 0
        else:
            # Desenha mãos
            player.draw_hand(win, 100, 500)
            dealer.draw_hand(win, 100, 100)
            for i, card in enumerate(table_cards):
                card.draw(win, 300 + i * (CARD_WIDTH + 10), 300)

        pygame.display.update()

    pygame.quit()

if __name__ == "__main__":
    main()