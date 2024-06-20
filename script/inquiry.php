<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8');
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $restaurantName = htmlspecialchars($_POST['restaurantName'], ENT_QUOTES, 'UTF-8');
    $restaurantAddress = htmlspecialchars($_POST['restaurantAddress'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    if ($name && $email && $message) {
        // Email details
        $to = "parakh@pixel6.co";  // Replace with your email address
        $subject = "RMS's Inquiry from $name";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        // Email body
        $body = "You have received a new inquiry from your website.\n\n";
        $body .= "Name: $name\n";
        $body .= "Phone: $phone\n";
        $body .= "Email: $email\n";
        if (!empty($restaurantName)) {
            $body .= "Restaurant Name: $restaurantName\n";
        }
        if (!empty($restaurantAddress)) {
            $body .= "Restaurant Address: $restaurantAddress\n";
        }
        $body .= "Message:\n$message\n";
        
        // Send email
        if (mail($to, $subject, $body, $headers)) {
            echo "Thank you for your inquiry. We will get back to you soon.";
        } else {
            echo "Sorry, there was an error sending your message. Please try again later.";
        }
    } else {
        echo "Invalid form data. Please check your inputs and try again.";
    }
} else {
    echo "Invalid request method.";
}
