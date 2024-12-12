
import './App.css';

import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./Store/styles.css";

import * as AlertDialog from "@radix-ui/react-alert-dialog";



function App() {
  const [selectedValue, setSelectedValue] = useState("");

	const handleValueChange = (value) => {
		setSelectedValue(value);
		console.log("Selected Value:", value); // طباعة القيمة في وحدة التحكم
	};

	return (  
 
		<div>
			<Select.Root onValueChange={handleValueChange}>
				<Select.Trigger className="SelectTrigger" aria-label="Food">
					<Select.Value placeholder="Select a fruit…" />
					<Select.Icon className="SelectIcon">
						<ChevronDownIcon />
					</Select.Icon>
				</Select.Trigger>
				<Select.Portal>
					<Select.Content className="SelectContent">
						<Select.ScrollUpButton className="SelectScrollButton">
							<ChevronUpIcon />
						</Select.ScrollUpButton>
						<Select.Viewport className="SelectViewport">
							<Select.Group>
								<Select.Label className="SelectLabel">Fruits</Select.Label>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</Select.Group>

							<Select.Separator className="SelectSeparator" />

							<Select.Group>
								<Select.Label className="SelectLabel">Vegetables</Select.Label>
								<SelectItem value="aubergine">Aubergine</SelectItem>
								<SelectItem value="broccoli">Broccoli</SelectItem>
								<SelectItem value="carrot" disabled>
									Carrot
								</SelectItem>
								<SelectItem value="courgette">Courgette</SelectItem>
								<SelectItem value="leek">Leek</SelectItem>
							</Select.Group>

							<Select.Separator className="SelectSeparator" />

							<Select.Group>
								<Select.Label className="SelectLabel">Meat</Select.Label>
								<SelectItem value="beef">Beef</SelectItem>
								<SelectItem value="chicken">Chicken</SelectItem>
								<SelectItem value="lamb">Lamb</SelectItem>
								<SelectItem value="pork">Pork</SelectItem>
							</Select.Group>
						</Select.Viewport>
						<Select.ScrollDownButton className="SelectScrollButton">
							<ChevronDownIcon />
						</Select.ScrollDownButton>
					</Select.Content>
				</Select.Portal>
			</Select.Root>

			{/* عرض القيمة المختارة */}
			<p>Selected Value: {selectedValue}</p>
      <div>
      <div>
    <AlertDialog.Root>
		<AlertDialog.Trigger asChild>
			<button className="Button violet">Delete account</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="AlertDialogOverlay" />
			<AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					Are you absolutely sure?
				</AlertDialog.Title>
				<AlertDialog.Description className="AlertDialogDescription">
					This action cannot be undone. This will permanently delete your
					account and remove your data from our servers.
				</AlertDialog.Description>
				<div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel asChild>
						<button className="Button mauve">Cancel</button>
					</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<button className="Button red">Yes, delete account</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
    </div>
      </div>
		</div>
	);
};

const SelectItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return ( 
    <>
    <div>

   
			<Select.Item
				className={classnames("SelectItem", className)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className="SelectItemIndicator">
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
      </div>
   
      </>
		);
	},
);


export default App;
