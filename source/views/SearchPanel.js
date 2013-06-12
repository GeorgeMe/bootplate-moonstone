enyo.kind({
	name: "sample.SearchPanel",
	kind: "moon.Panel",
	title: "Search",
	titleBelow: "Using the last.fm API",
	headerComponents: [
		{kind: "sample.SearchBox"}
	],
	components: [
		{name: "list", kind: "moon.DataList", classes: "enyo-fill", fit: true, controller: ".app.controllers.artists", components: [
			{kind: "sample.Item", bindFrom: ".name", ontap: "dispatchArtist"}]}
	],
	dispatchArtist: function (sender, event) {
		var $row = event.row;
		if ($row) {
			router.set("location", "artist/" + $row.model.get("id"));
			return true;
		}
	}
});
