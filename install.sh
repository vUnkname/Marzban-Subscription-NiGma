#!/bin/bash

download_url="https://raw.githubusercontent.com/vUnkname/Marzban-Subscription-NiGma/main/index.html"
template_dir="/var/lib/marzban/templates/subscription"
template_file="$template_dir/index.html"
env_file="/opt/marzban/.env"
BRIGHT_GREEN="\e[92m"
Cranberry="\e[38;2;158;16;66m"
RESET="\e[0m"

sudo clear
echo -e "Select an option:\n\n1) Install ${Cranberry}NiGma${RESET} Subscription ${BRIGHT_GREEN}Template${RESET}\n2) Update and change Admin ID\n"
read -p "Enter choice [1-2]: " choice

install_template() {
    echo "Downloading template..."
    sleep 3
    sudo mkdir -p "$template_dir"
    sudo wget -O "$template_file" "$download_url"
    echo "Template downloaded and moved to $template_dir"
}

update_admin_id() {
    read -p "${BRIGHT_GREEN}[+]${RESET} Your telegram support Id (Admin ID): " admin_id
    echo "Updating Admin ID..."
    sleep 3
    sudo sed -i "s/\[\[\$adminID\]\]/$admin_id/g" "$template_file"
}

apply_config() {
    echo "Applying configuration..."
    sleep 3
    echo 'CUSTOM_TEMPLATES_DIRECTORY="/var/lib/marzban/templates/"' | sudo tee -a "$env_file"
    echo 'SUBSCRIPTION_PAGE_TEMPLATE="subscription/index.html"' | sudo tee -a "$env_file"
    echo "Restarting Marzban..."
    sleep 3
    sudo marzban restart
}

case $choice in
    1)
        install_template
        update_admin_id
        apply_config
        echo "Installation completed successfully."
        ;;
    2)
        install_template
        update_admin_id
        apply_config
        echo "Source and Admin ID updated successfully."
        ;;
    *)
        echo "Invalid option. Exiting."
        exit 1
        ;;
esac