import React, { FC, useState } from "react";

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>("");
 const [isDrag, setIsDrag] = useState<boolean>(false)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(value);
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("drag");
	};

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('dropped')
    }

	return (
		<div>
			<input type="text" value={value} onChange={changeHandler} />
			<button onClick={clickHandler}>Event</button>
			<div
				onDrag={dragHandler}
				draggable
				style={{ width: 200, height: 200, backgroundColor: "red" }}
			></div>
			<div

            onDrop={dropHandler}
            onDragLeave={leaveHandler}
            onDragOver={dragWithPreventHandler}
				style={{
					width: 200,
					height: 200,
					backgroundColor: isDrag ? 'green' : 'grey',
					marginTop: 15,
				}}
			></div>
		</div>
	);
};

export default EventsExample;
