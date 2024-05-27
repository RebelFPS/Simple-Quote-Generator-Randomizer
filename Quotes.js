        /* Type the Quotes */
        const quotes = [
            "Blue Blue Napkin. - Nicewigg",
            "I walk around with my pants down so every one knows im the hardest. - Duke dennis",
            "W RIZZ. - Kai C",
            "WHY ARE THEY THERE. - ImperialHAL",
            "I NEED LIGHT. - ImperialHAL",
            "ARE YOU BRIAN DEAD. - ImperialHAL",
        ];
        
        function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quoteText = document.getElementById("quote-text");
            quoteText.textContent = quotes[randomIndex];
        }