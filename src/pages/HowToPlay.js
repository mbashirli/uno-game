import React from "react";
import "./HowToPlay.css";
import PlayingUNO from "../assets/playing_uno.jpeg";

const HowToPlay = () => {
  return (
    <div className="content-wrapper">
      <div className="container">
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
          rel="stylesheet"
        ></link>
        <h1 className="title">How to Play UNO?</h1>
        <img src={PlayingUNO} className="playing_uno"></img>
        <h4 className="text">
          The rules to UNO are simple once you get used to them. We've also
          included a few common house rules to spice up the game. UNO is a
          fast-paced card game played similar to Crazy 8s that includes special
          cards that ramp up the fun. Just like another game by the makers of
          UNO called Phase 10, UNO is suggested for ages 7 and above, but
          younger kids can still enjoy the game. It can even be a good game to
          reinforce numbers and colors.
        </h4>
        <h2>The Objective</h2>
        <h4 className="text">
          The goal of UNO is to be the first person to play the very last card
          in your hand. The fun of UNO is the requirement to yell "UNO!" when
          you are down to that last card. When playing multiple games, the
          winner is the player with the lowest score.
        </h4>
        <h2>How to Play?</h2>
        <h4>
          The gameplay of UNO consists of each player taking turns that consist
          of either matching the upmost face-up card in the stack or playing one
          of the special cards.
        </h4>
        <li>
          At the beginning of their turn, a player can match either the number
          or the color of the face-up card with a card in their hand. If the
          card is matched, play continues to the next player.
        </li>
        <li>
          If the player does not have a matching card but has a Wild Card or
          Wild Draw 4 Card in their hand, they can choose to play the card. Wild
          cards allow the player to choose any color.
        </li>
        <li>
          The player must take the topmost card from the draw pile if they
          cannot play a card from their hand. If the drawn card cannot be
          played, they continue taking cards from the draw pile until they can
          play a card.
        </li>
        <li>
          The player is not forced to play a matching card from their hand. They
          can choose to play a Wild card or take a new card from the draw pile.
          If the player elects to draw cards, they must continue drawing until
          they receive a playable card. They cannot play a card that was
          originally in their hand after choosing to take a card from the draw
          pile.
        </li>
        <li>
          After the player matches the face-up card, play continues to the next
          player. At the start of the game, play continues to the left of the
          player in a clockwise direction. As the name implies, the Reverse card
          will change the direction of the next player from left-to-right or
          right-to-left.
        </li>
        <li>
          A Reverse card played in a two-person game acts like a Skip card.
        </li>
        <h4>
          If the last card is taken from the draw pile, all of the cards that
          have been played except the topmost face-up card should be shuffled
          and used as a new draw pile. This can continue as many times as it may
          take for someone to finally run out of cards in their hand.
        </h4>
      </div>
      <div className="filler"></div>
    </div>
  );
};

export default HowToPlay;
