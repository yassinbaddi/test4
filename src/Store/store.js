import "@radix-ui/themes/styles.css";
import "./my-styles.css";

function MyApp() {
	return (
		<Theme>
			<Box asChild m="5" >
				<p className="my-paragraph">My custom paragraph</p>
			</Box>
		</Theme>
	);
}
