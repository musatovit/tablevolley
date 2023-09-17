import React, {useEffect, useState} from 'react';

const EmojiPicker = ({setInput}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');

    const emojis = ['💩','🤡','🤮','✌','💪','👌','🖕','👍', '👎','🤌','🤦','😡','💔','😆', '😅', '😂', '🤣', '😊', '😇', '🇦🇷', '🇦🇺', '🇧🇬', '🇨🇦', '🇧🇷', '🇩🇪', '🇮🇹', '🇯🇵', '🇵🇱'];

    useEffect(() => {
        setInput(prev => prev + selectedEmoji)
    },[selectedEmoji])

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
        setShowPicker(false);
    };

    return (
        <>
            <button onClick={() => setShowPicker(!showPicker)}>😊</button>
            {showPicker && (
                <>
                    {emojis.map((emoji) => (
                        <span
                            key={emoji}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleEmojiClick(emoji)}
                        >
              {emoji}
            </span>
                    ))}
                </>
            )}
        </>
    );
};

export default EmojiPicker;
