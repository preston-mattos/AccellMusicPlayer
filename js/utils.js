// enum for data types, matches first 3 bits of all notes in binary
const NoteType = {
	Note: "note",
	TempoMarker: "tempoMarker",
	RepeatStart: "repeatStart",
	RepeatEnd: "repeatEnd",
	Invalid: "invalid"
}

// class for note data
class MusicNote {
	constructor(noteData) {
		this.decimal = noteData;
		this.binary = intToBinary(noteData);
		this.type = getDataType(this.binary)
	}
}

// parse binary for data type
function getDataType(noteBinary) {
	let dataValue = noteBinary.substring(0, 3);
	switch (dataValue) {
		case "000":
			return NoteType.Note;
		case "001":
			return NoteType.TempoMarker;
		case "010":
			return NoteType.RepeatStart;
		case "011":
			return NoteType.RepeatEnd;
		default:
			return NoteType.Invalid;
	}
}

// convert int to 32-bit binary
function intToBinary(noteDecimal) {
	let binaryValue = ""
	let zeroes = (Math.clz32(noteDecimal));
	for (let index = 0; index < zeroes; index++) {
		binaryValue += "0"
	}
	binaryValue += noteDecimal.toString(2);
	return binaryValue;
}

// create table containing empty note data
function createNoteArray() {

}

// fill table with data from AMF file
function populateNoteArray() {

}