export const MoodBoardItem = (props) => {
	return (
		<div className="mood-board-item" style={{ backgroundColor: props.color }}>
			<img className="mood-board-image" src={props.image} alt={props.alt} />
			<h3 className="mood-board-text">{props.description}</h3>
		</div>
	)
}

export const MoodBoard = () => {
	return (
		<div>
			<h1 className="mood-board-heading">Destination Mood Board</h1>
			<div className="mood-board">
				<MoodBoardItem color="red" image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg" alt="A sailboat in the sunset" description="Sailing" />
				<MoodBoardItem color="green" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" alt="Kayaking through a canyon" description="Kayaking" />
				<MoodBoardItem color="blue" image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg" alt="Santorini" description="Greece" />
			</div>
		</div>
	)
}