<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Empfangen der POST-Daten
$postData = json_decode(file_get_contents('php://input'), true);

// Validierung der Pflichtfelder
if (empty($postData['name']) || empty($postData['email']) || empty($postData['message']) || empty($postData['privacy'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Alle Felder müssen ausgefüllt sein']);
    exit;
}

$name = $postData['name'];
$email = $postData['email'];
$message = $postData['message'];
$privacy = $postData['privacy'];

// E-Mail-Empfänger
$to = "info@louisa-muecher.de"; // Ihre E-Mail-Adresse hier eintragen

// E-Mail-Betreff
$subject = "Neue Kontaktanfrage von $name";

// E-Mail-Inhalt
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Nachricht:\n$message\n\n";
$email_content .= "Datenschutzerklärung akzeptiert: Ja\n";

// E-Mail-Header
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8'
];

// E-Mail senden
$success = mail($to, $subject, $email_content, $headers);

// Antwort senden
if ($success) {
    http_response_code(200);
    echo json_encode(["message" => "Nachricht wurde erfolgreich gesendet"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Fehler beim Senden der Nachricht"]);
}
?>
