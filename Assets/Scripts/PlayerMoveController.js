#pragma strict

var rb: Rigidbody;
var jump : boolean = false;
var jumpable : boolean = true;
var bound : int = 0;
var dx : float = 0;
var dz : float = 0;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	var z : float = Input.GetAxis("Vertical");
	transform.Rotate(Vector3(z * 10, 0, x * -10), Space.World);

	if (!jump && jumpable && Input.GetButtonDown("Jump")) {
		dx = x;
		dz = z;

		jump = true;
		rb.velocity = Vector3(0, 20, 0);
	}

	if (jump) {
		transform.Translate(Vector3((x/1.5 + dx)/2 * 0.15, 0, (z/1.5 + dz)/2 * 0.15), Space.World);
		transform.Rotate(Vector3((z/6 + dz)/2 * 10, 0, (x/6 + dx)/2 * -10), Space.World);
	} else if (bound != 0) {
		transform.Translate(Vector3((x/1.2 + dx/1.5)/2 * 0.15, 0, (z/1.2 + dz/1.5)/2 * 0.15), Space.World);
		transform.Rotate(Vector3((z/6 + dz/bound)/2 * 10, 0, (x/6 + dx/bound)/2 * -10), Space.World);
	} else {
		transform.Translate(Vector3(x * 0.15, 0, z * 0.15), Space.World);
	}
}

function OnCollisionEnter (collision: Collision) {
	if (collision.gameObject.name == "Ground") {
		jump = false;
		jumpable = true;
	}
}

function OnCollisionExit (collision: Collision) {
	if (!jump && collision.gameObject.name == "Ground") {
		bound++;
		yield WaitForSeconds(0.03);
		jumpable = false;
	}
}

function OnCollisionStay (collision: Collision) {
	if (collision.gameObject.name == "Ground") {
		bound = 0;
		jumpable = true;
	}
}
